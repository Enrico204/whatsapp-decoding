from flask import Flask, Response
from flask_sockets import Sockets
import time
import libwhatsapp.whatsappdecrypt as wd
import libwhatsapp.whatsappencrypter as we
import json
from Queue import Queue
import base64
import traceback


app = Flask(__name__)
sockets = Sockets(app)

sessions = {}
keys = {"key":"0LjJkYdV78bajkjS/zQaFfXHIu8a5KvCUBqjZduvXS0=","encKey":"M2QJsKzEYfz4AjprixFCN5JRaKhYSqwZga+Lo8Y+WLw=","macKey":"0LjJkYdV78bajkjS/zQaFfXHIu8a5KvCUBqjZduvXS0="}
WAToken1 = "JzZGT+hQ0V8As//PDLU7iZvdh1tseztB8IHQ9RBhwFQ="
WAToken2 = "0@2SOCx/0H8zVkUXFGChuq1bUkhmjfrTFfMSKePds9FrlrNCakHAhJpyAY/N8UjfzATx06ycrvyTKRlA=="


for i in ['key', 'encKey', 'macKey']:
	keys[i] = base64.b64decode(keys[i])

@sockets.route('/ws')
def wssocket(ws):
	global sessions

	browserid = "5vpI1TwSAZUesd0vsCNJ4Q=="
	sessions[browserid] = {
		'browserid': browserid,
		'sendq': Queue(),
		'inittag': None,
		'ws': ws,
		'presence': None
	}

	while not ws.closed:
		message = ws.receive()
		if message is not None:
			# print "DEBUG: %s" % repr(message)

			if message == '?,,':
				# print "keepalive"
				ws.send("!%d" % int(time.time()*1000))
			elif type(message) is str:
				try:
					toskip = message.find(",") + 1
					tag = message[:toskip-1]
					if message[toskip] == ",":
						toskip += 1
					data = message[toskip:]
					dataj = json.loads(data)
					if dataj[0] == 'admin' and dataj[1] == 'init':
						# print "Init with version: %d.%d.%d - %s - ID: %s - Remember:%s" % (dataj[2][0], \
						# 	dataj[2][1], dataj[2][2], " on ".join(dataj[3]), dataj[4], \
						# 	"Y" if dataj[5] else "N")
						sessions[browserid]['inittag'] = tag
						resp = {
							"status": 200,
							"ref": "0@2K00cKKVJGRyADT3cT3TTQRP+qn3axB7PLZ7TDZOJT0e1OrKBSVAHqfn",
							"ttl": 20000,
							"update": False,
							"curr": "%d.%d.%d" % (dataj[2][0], dataj[2][1], dataj[2][2]),
							"time": time.time()*1000
						}
						ws.send("%s,%s" % (tag, json.dumps(resp)))
						inited = True
					elif dataj[0] == 'admin' and dataj[1] == 'login':
						# print "Login with client: %s\nserver: %s\nbrowserid:%s\nMode: %s" % \
						# 	(dataj[2], dataj[3], dataj[4], dataj[5] if len(dataj) == 6 else "-")

						resp, s1, s2, s3, cts, lastmsg, pkt16 = loginmessages(browserid)
						ws.send("%s,%s" % (tag, json.dumps(resp)))
						ws.send("s1,%s" % json.dumps(s1))
						ws.send("s2,%s" % json.dumps(s2))
						ws.send("s3,%s" % json.dumps(s3))

						# contact list
						ws.send(we.encryptmessage("preempt-.--4b", cts, keys), True)

						sessions[browserid]['ws'].send(we.encryptmessage("--4c", lastmsg, keys), True)
						sessions[browserid]['ws'].send(we.encryptmessage("--4a", pkt16, keys), True)
						loggedin = True
					elif dataj[0] == 'admin' and dataj[1] == 'Conn' and dataj[2] == 'reref':
						resp = {
							"status": 200,
							"ref": "0@/ZQpqvCgwCD3d2dzgbCaU/HkgzzT+lttQgoL+l5VBpXPR9m/d1eRgibW",
							"ttl": 20000
						}
						ws.send("%s,%s" % (tag, json.dumps(resp)))
						# print "Resending data"
					elif dataj[0] == "query" and dataj[1] == "ProfilePicThumb":
						ws.send("%s,%s" % (tag, json.dumps({"status":404})))
					elif dataj[0] == "query" and dataj[1] == "Presence":
						ws.send("%s,%s" % (tag, json.dumps({"t": time.time() })))
					else:
						print "Text Unmanaged: %s" % message
				except Exception as e:
					print e.message
					tb = traceback.format_exc()
					print tb
					ws.close()
			else:
				toskip = message.find(",") + 1
				tag = message[:toskip-1]
				if message[toskip] == ",":
					toskip += 1
				data, packet = wd.decryptandparse(str(message[toskip:]), keys, True)
				print data
				if type(data) is dict:
					if data['name'] == 'action' and type(data['children']) is list:
						firstchild = data['children'][0]
						if data['attributes']['type'] == 'set' and firstchild['name'] == 'presence':
							print "Switch presence to %s" % firstchild['attributes']['type']
							if firstchild['attributes']['type'] == 'available':
								sessions[browserid]['presence'] = None
							else:
								sessions[browserid]['presence'] = time.time()
						else:
							print repr(packet)
					elif data['name'] == 'query' and type(data['children']) is list and len(data['children']) > 0:
						firstchild = data['children'][0]
						print "Query for %s not implemented yet" % firstchild['name']
					elif data['name'] == 'query':
						print "Query for %s not implemented yet" % data['attributes']['type']
					else:
						print repr(packet)
				else:
					print repr(packet)
	sessions.pop(browserid)


@app.route("/login")
def login():
	browserid = "5vpI1TwSAZUesd0vsCNJ4Q=="
	resp, s1, s2, s3, cts, lastmsg, pkt16 = loginmessages(browserid)
	sessions[browserid]['ws'].send("%s,%s" % (sessions[browserid]['inittag'], json.dumps(resp)))
	sessions[browserid]['ws'].send("s1,%s" % json.dumps(s1))
	sessions[browserid]['ws'].send("s2,%s" % json.dumps(s2))
	sessions[browserid]['ws'].send("s3,%s" % json.dumps(s3))
	# contact list
	sessions[browserid]['ws'].send(we.encryptmessage("preempt-.--4b", cts, keys))

	sessions[browserid]['ws'].send(we.encryptmessage("--4c", lastmsg, keys))
	sessions[browserid]['ws'].send(we.encryptmessage("--4a", pkt16, keys))
	return "Ok"

@app.route("/wam", methods=['POST'])
def wam():
	resp = Response("")
	resp.headers["Access-Control-Allow-Origin"] = "*"
	return resp

def loginmessages(browserToken):
	resp = {
		"status": 200
	}
	s1 = [
		'Conn',
		{
			"ref": "0@1K00cKKVJGRyADT3cT3TTQRP+qn2axB7PLZ7TDZOJT0e1OrKBSVAHqfn",
			"wid": "393319589759@c.us",
			"connected": True,
			"isResponse": "true",
			"serverToken": "0@16tpmIEgDKsCBE8EEfeyfYsOx6owPiDQhKUouV4lEmbBToMgHmHGmridFFusjOEumJtk4jS9rYIY7A==",
			"browserToken": browserToken,
			"clientToken": "pjZKAdSF6ZqmhByZ2dfcC0m08TKd5Wgn/imRiOZQECY=",
			"lc": "IT",
			"lg": "it",
			"is24h": True,
			"protoVersion": [0, 11],
			"binVersion": 7,
			"battery": 90,
			"plugged": False,
			"platform": "android",
			"features": {
				"DOC_TYPES": "csv,doc,docx,pdf,ppt,pptx,rtf,txt,xls,xlsx",
				"URL": True
			},
			"phone": {
				"wa_version":"2.16.396",
				"mcc":"222",
				"mnc":"001",
				"os_version":"4.2.2",
				"device_manufacturer":"alps",
				"device_model":"106_v89_jbla768_fwvga",
				"os_build_number":"2206_jbla768_f_20140429"
			},
			"tos": 0,
			"pushname":"TESTSERVER"
		}
	]
	s2 = ["Stream", "update", False, "0.2.2730"]
	s3 = [
		"Props",
		{
			"bucket":"b",
			"gifSearch":"tenor",
			"SPAM": True,
			"SET_BLOCK": True,
			"MESSAGE_INFO": True,
			"media":64,
			"maxSubject":25,
			"maxParticipants":257,
			"videoMaxEdge":960,
			"imageMaxKBytes":1024,
			"imageMaxEdge":1600
		}
	]
	cl = "\xf8\x04M[\x13\xf8\x03\xf8\t\x13-\xfa\xff\x0692\x86w\x93\x01P\x18\xff\x81\x0fW\xff\x05\x14\x81\x13'\x07q \xf8\x0b\x13-\xfa\xff\x0694\x08xv\x81P\x18\xff\x81\x0fW\xff\x05\x14\x81\x89\x10r4Zq \xf8\t\x13-\xfa\xff\x0692\x93\x12bBP\x18\xff\x81\x0fW\xff\x05\x14\x81\x12D\x11q "
	lastmsg = "\xf8\x04\t\n/\xf8\x03\xf8\x024\xfcV\n5\n\x1b391230987654@s.whatsapp.net\x10\x01\x1a\x143EB06485910522C93941\x12\x15\n\x13Questa e' una prova\x18\xa3\x95\xa1\xc2\x05 \x03\xf8\x024\xfcK\n5\n\x1b391234567890@s.whatsapp.net\x10\x00\x1a\x143EB0BC5B9622F916D1DC\x12\x06\n\x04test\x18\x80\xba\xcf\xc2\x05 \x00\x9a\x01\x01E\xf8\x024\xfcP\n?\n\x1b391234545454@s.whatsapp.net\x10\x00\x1a\x1e8C695B1DC4DC03B70F1EFCE4228362\x12\x05\n\x03Rrr\x18\xbb\xd4\xa0\xc2\x05 \x00"
	pkt16 = '\xf8\x02\t\xf8\x01\xf8\x04\x17[\x8b\xf8\x03\xf8\x034-\xfa\xff\x0694\x08xv\x81P\xf8\x03(-\xfa\xff\x0694\x08xv\x81P\xf8\x03\xfc\x05video-\xfa\xff\x0694\x08xv\x81P''\xf8\x02\t\xf8\x01\xf8\x04\x17[\x8b\xf8\x03\xf8\x034-\xfa\xff\x0694\x08xv\x81P\xf8\x03(-\xfa\xff\x0694\x08xv\x81P\xf8\x03\xfc\x05video-\xfa\xff\x0694\x08xv\x81P'
	return resp, s1, s2, s3, cl, lastmsg, pkt16

if __name__ == "__main__":
	from gevent import pywsgi
	from geventwebsocket.handler import WebSocketHandler
	server = pywsgi.WSGIServer(('', 5000), app, handler_class=WebSocketHandler)
	server.serve_forever()
