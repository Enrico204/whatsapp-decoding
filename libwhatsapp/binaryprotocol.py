import math

messageTypes = {
	"DEBUG_LOG": 1,
    "QUERY_RESUME": 2,
    "QUERY_RECEIPT": 3,
    "QUERY_MEDIA": 4,
    "QUERY_CHAT": 5,
    "QUERY_CONTACTS": 6,
    "QUERY_MESSAGES": 7,
    "PRESENCE": 8,
    "PRESENCE_SUBSCRIBE": 9,
    "GROUP": 10,
    "READ": 11,
    "CHAT": 12,
    "RECEIVED": 13,
    "PIC": 14,
    "STATUS": 15,
    "MESSAGE": 16
}

# Trova il tipo di messaggio corrispondente al tag
def findType(num):
	for i in messageTypes:
		if messageTypes[i] == num:
			return i
	return None

# Codifica un intero di dimensione variabile
def encodeVarInt(e):
	r = 1 if e < 128 else (2 if e < 16384 else (3 if e < 2097152 else (4 if e < 268435456 else \
		(5 if e < 34359738368 else (6 if e < 4398046511104 else (7 if e < 562949953421312 else (8 if e < 72057594037927940 else 9)))))))
	if r is None:
		raise Exception("Number error: %d" % e)

	eneg = e < 0
	if eneg:
		e = -e

	n = 10 if eneg else r
	s = r
	a = e
	buf = ""
	while s > 4:
		c = int(math.floor(a / 128.0))
		p = int(a - 128*c)
		buf += chr(128 | 127 & p)
		a = c
		s -= 1

	while s > 1:
		buf += chr(128 | 127 & a)
		a >>= 7
		s -= 1

	buf += chr(a)

	if eneg:
		raise NotImplementedError()

	return buf

# Legge un intero di dimensione variabile
def readVarInt(e):
	r = (ord(e[0]) < 128 and 1) or (len(e)>1 and ord(e[1]) < 128 and 2) or (len(e)>2 and ord(e[2]) < 128 and 3)\
	 	or (len(e)>3 and ord(e[3]) < 128 and 4) or (len(e)>4 and ord(e[4]) < 128 and 5) or None
	if r is None:
		return None

	val = 0
	for i in xrange(min(r, 4)):
		val <<= 7
		val = val | 127 & ord(e[(r-1)-i])

	for i in range(4, r):
		val *= 128
		val += 127 & ord(e[(r-1)-i])

	return val, e[r:]

# Controlla se l'intero di dimensione variabile all'inizio dell'array corrisponde al valore passato
def isparamtype(d, val):
	found = True
	p = encodeVarInt(val)
	for i in xrange(len(p)):
		if d[i] != p[i]:
			found = False
	return found

# Decodifica il pacchetto dati
def decodepacket(d):
	# Struttura:
	# '\n5\n' (key)
	d = d[2:]
	ret = []

	while len(d) > 0:
		if isparamtype(d, 26): # len(1)
			msgidlen, d = readVarInt(d[1:])

			msgid = d[:msgidlen]
			d = d[msgidlen:]
			# print "Messageid: %s" % msgid
			ret.append({'type':'messageid', 'value': msgid})
		elif isparamtype(d, 16): # len(1)
			# FromMe:
			fromme = ord(d[1])

			d = d[2:]
			# print "FromMe: %d" % fromme
			ret.append({'type':'fromme', 'value': fromme})
		elif isparamtype(d, 18):
			msglen, d = readVarInt(d[1:])

			msg = d[:msglen]
			ret.append({'type':'message', 'value': decodemessage(msg)})
			#print "Message: %s" % repr(msg)
			d = d[msglen:]
		elif isparamtype(d, 10):
			jidlen, d = readVarInt(d[1:])

			jid = d[:jidlen]
			d = d[jidlen:]
			ret.append({'type':'jid', 'value': jid})
			# print "JID %s" % jid
		elif isparamtype(d, 24):
			# print "Timestamp"
			ts, d = readVarInt(d[1:])
			ret.append({'type':'timestamp', 'value': ts})

		elif isparamtype(d, 32):
			status = ord(d[1])
			d = d[2:]

			ret.append({'type':'status', 'value': status})
			# print "Status: %d" % status
		elif isparamtype(d, 154): # len(2)
			msglen, d = readVarInt(d[2:])

			sender = d[:msglen]
			# print "Sender: %s" % sender
			ret.append({'type':'sender', 'value': sender})
			d = d[msglen:]
		else:
			paramtype = d[0]
			raise NotImplementedError("Param: %d %x %s" % (ord(paramtype), ord(paramtype), repr(paramtype)))
	return ret

# Decodifica un "message" nel pacchetto dati
def decodemessage(d):
	ret = []
	while len(d) > 0:
		if isparamtype(d, 50):
			msglen, d = readVarInt(d[1:])

			exmsg = d[:msglen]
			ret.append({'type': 'extended-message', 'value': decoderealmessage(exmsg)})
			d = d[msglen:]
		elif isparamtype(d, 10):
			msglen, d = readVarInt(d[1:])

			exmsg = d[:msglen]
			# print "Text message: %s" % exmsg
			ret.append({'type': 'text', 'value': exmsg})
			d = d[msglen:]
		else:
			raise NotImplementedError("Param: %d" % ord(d[0]))
	return ret

# Decodifica il secondo livello di "message" nel pacchetto dati
def decoderealmessage(d):
	ret = []
	while len(d) > 0:
		if isparamtype(d, 10):
			msglen, d = readVarInt(d[1:])

			exmsg = d[:msglen]
			# print "Text message: %s" % exmsg
			d = d[msglen:]

			ret.append({'type': 'text', 'value': exmsg})
		elif isparamtype(d, 138):
			ctxlen, d = readVarInt(d[1:])
			d = d[ctxlen:]

			# TODO
			ret.append({'type': 'context', 'value': None})
		else:
			raise NotImplementedError("Param: %d" % ord(d[0]))
	return ret

def encodepacket(d):
	ret = bytearray("\n5\n")
	for item in d:
		if item['type'] == 'messageid':
			ret += encodeVarInt(26)
			ret += encodeVarInt(len(item['value']))
			ret += item['value']
		elif item['type'] == 'fromme':
			ret += encodeVarInt(16)
			ret += chr(item['value'])
		elif item['type'] == 'message':
			encmessage = encodemessage(item['value'])
			ret += encodeVarInt(18)
			ret += encodeVarInt(len(encmessage))
			ret += encmessage
		elif item['type'] == 'jid':
			ret += encodeVarInt(10)
			ret += encodeVarInt(len(item['value']))
			ret += item['value']
		elif item['type'] == 'timestamp':
			ret += encodeVarInt(24)
			ret += encodeVarInt(item['value'])
		elif item['type'] == 'status':
			ret += encodeVarInt(32)
			ret += chr(item['value'])
		elif item['type'] == 'sender':
			ret += encodeVarInt(154)
			ret += encodeVarInt(len(item['value']))
			ret += item['value']
		else:
			raise NotImplementedError("Unimplemented: %s" % repr(item))
	return ret

# Decodifica un "message" nel pacchetto dati
def encodemessage(d):
	ret = bytearray()
	for item in d:
		if item['type'] == 'extended-message':
			encmessage = encoderealmessage(item['value'])
			ret += encodeVarInt(50)
			ret += encodeVarInt(len(encmessage))
			ret += encmessage
		elif item['type'] == 'text':
			ret += encodeVarInt(10)
			ret += encodeVarInt(len(item['value']))
			ret += item['value']
		else:
			raise NotImplementedError("?")
	return ret

def encoderealmessage(d):
	ret = bytearray()
	for item in d:
		if item['type'] == 'text':
			ret += encodeVarInt(10)
			ret += encodeVarInt(len(item['value']))
			ret += item['value']
		elif item['type'] == 'context':
			raise NotImplementedError("?")
		else:
			raise NotImplementedError("?")
	return ret
