import base64
from Crypto.Cipher import AES
from Crypto import Random
from pkcs7 import PKCS7Encoder
import hmac
import hashlib
import sys
import json

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

iv = Random.new().read( AES.block_size )
encoder = PKCS7Encoder()

def loadkeys(fname):
	j = json.load(open(fname, "r"))
	for i in j:
		j[i] = base64.b64decode(j[i])
	return j

def encryptmessage(tag, d, keys):
	decr = AES.new(keys['encKey'], AES.MODE_CBC, iv)
	o = iv + decr.encrypt(encoder.encode(d))
	sig = hmac.new(keys['macKey'], msg=o, digestmod=hashlib.sha256).digest()
	return tag + "," + sig + o


if __name__ == '__main__':
	from whatsappdecrypt import decryptmessage
	msg = encryptmessage("|TAG|", "{prova}", loadkeys("../tests/keyset1.json"))
	toskip = msg.find(",") + 1
	print msg[:toskip-1]
	print decryptmessage(msg[toskip:], loadkeys("../tests/keyset1.json"))
