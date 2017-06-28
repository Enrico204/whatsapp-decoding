import base64
from Crypto.Cipher import AES
import hmac
import hashlib
import sys
from binaryprotocol import *
from wadeserializer import *
import json
from pprint import pprint


def cleanpkcs7(txt):
	lastbyte = ord(txt[-1])
	if len(txt) <= lastbyte:
		return txt

	found = True
	for i in xrange(lastbyte-1):
		if ord(txt[-(i+1)]) != lastbyte:
			found = False
	if found:
		return txt[:-lastbyte]
	else:
		return txt

def loadkeys(fname):
	j = json.load(open(fname, "r"))
	for i in j:
		j[i] = base64.b64decode(j[i])
	return j

def decryptmessage(p, keys):
	n = p[:32]
	o = p[32:]
	i = p[32:48]
	d = p[48:]

	decr = AES.new(keys['encKey'], AES.MODE_CBC, i)
	sig = hmac.new(keys['macKey'], msg=o, digestmod=hashlib.sha256).digest()

	if n != sig:
		raise Exception("Invalid signature")

	return cleanpkcs7(decr.decrypt(d))

def decryptfull(v, keys, skiptag=False):
	if not skiptag:
		if v is None or v.count(",") < 1:
			raise Exception("Message error")

		# trovo la ",", la salto
		toskip = v.find(",") + 1
		p = v[toskip:]
		print v[:toskip-1]
	else:
		p = v
	try:
		packet = decryptmessage(p, keys)
	except:
		# salto i primi due interi (interni di whatsapp)
		packet = decryptmessage(p[2:], keys)
	return packet

def decryptandparse(v, keys, skiptag=False):
	packet = decryptfull(v, keys, skiptag)
	return listdecode(packet), packet


if __name__ == '__main__':
	with open(sys.argv[1], "rb") as f:
		v = f.read()
		if len(sys.argv) == 3 and sys.argv[2] == '-b':
			print repr(decryptfull(v, loadkeys("../tests/keyset2.json")))
		else:
			pprint(decryptandparse(v, loadkeys("../tests/keyset2.json")))
