# coding=utf-8
import binaryprotocol as bp
import sys

# Come funziona: viene serializzato un nodo. Il nodo contiene un nome (espresso
# con un intero che rappresenta un "token"), degli attributi e dei figli.
# In particolare, contiene nell'ordine: #elementi, nome, attributi e figli.

tokens = {
	"200": 3,
	"400": 4,
	"404": 5,
	"409": 110,
	"500": 6,
	"501": 7,
	"502": 8,
	"action": 9,
	"add": 10,
	"admin": 101,
	"after": 11,
	"archive": 12,
	"author": 13,
	"available": 14,
	"battery": 15,
	"before": 16,
	"block": 108,
	"body": 17,
	"broadcast": 18,
	"call_log": 133,
	"canonical-url": 120,
	"chat": 19,
	"checksum": 106,
	"ciphertext": 135,
	"clear": 20,
	"code": 21,
	"composing": 22,
	"contacts": 23,
	"count": 24,
	"create": 25,
	"creator": 102,
	"debug": 26,
	"delete": 27,
	"delivery": 116,
	"demote": 28,
	"description": 119,
	"duplicate": 29,
	"emoji": 117,
	"encoding": 30,
	"epoch": 107,
	"error": 31,
	"false": 32,
	"filehash": 33,
	"filename": 125,
	"frequent": 139,
	"from": 34,
	"g.us": 35,
	"gif": 137,
	"group": 36,
	"groups_v2": 37,
	"height": 38,
	"id": 39,
	"identity": 126,
	"image": 40,
	"in": 41,
	"index": 42,
	"invis": 43,
	"invite": 136,
	"item": 44,
	"jid": 45,
	"kind": 46,
	"last": 47,
	"leave": 48,
	"live": 49,
	"log": 50,
	"matched-text": 121,
	"media": 51,
	"media_key": 124,
	"media_message": 131,
	"message": 52,
	"message_info": 115,
	"mimetype": 53,
	"missing": 54,
	"modify": 55,
	"modify_tag": 114,
	"mute": 99,
	"name": 56,
	"notification": 57,
	"notify": 58,
	"out": 59,
	"owner": 60,
	"page": 128,
	"page_count": 129,
	"participant": 61,
	"paused": 62,
	"picture": 63,
	"played": 64,
	"powersave": 105,
	"presence": 65,
	"preview": 66,
	"previous": 109,
	"profile": 134,
	"promote": 67,
	"query": 68,
	"raw": 69,
	"read": 70,
	"read_only": 100,
	"reason": 112,
	"receipt": 71,
	"received": 72,
	"recipient": 73,
	"recording": 74,
	"relay": 75,
	"remove": 76,
	"replaced": 111,
	"response": 77,
	"resume": 78,
	"retry": 79,
	"s.whatsapp.net": 80,
	"search": 130,
	"seconds": 81,
	"security": 132,
	"set": 82,
	"short": 103,
	"size": 83,
	"spam": 113,
	"star": 122,
	"status": 84,
	"subject": 85,
	"subscribe": 86,
	"t": 87,
	"text": 88,
	"title": 118,
	"to": 89,
	"true": 90,
	"type": 91,
	"unarchive": 92,
	"unavailable": 93,
	"unread": 127,
	"unstar": 123,
	"update": 104,
	"url": 94,
	"user": 95,
	"value": 96,
	"vcard": 138,
	"web": 97,
	"width": 98
}

arraytypes = {
	"STREAM_END": 2,
    "LIST_EMPTY": 0,
    "DICTIONARY_0": 236,
    "DICTIONARY_1": 237,
    "DICTIONARY_2": 238,
    "DICTIONARY_3": 239,
    "LIST_8": 248,
    "LIST_16": 249,
    "JID_PAIR": 250,
    "BINARY_8": 252,
    "BINARY_20": 253,
    "BINARY_32": 254,
    "NIBBLE_8": 255,
    "SINGLE_BYTE_MAX": 256,
    "NIBBLE_MAX": 254
}

nibbleDecode = {
	0: "0",
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
	9: "9",
	10: "-",
	11: ".",
	15: "\0"
}

# Trova la chiave corrispondente al token
def findkey(v):
	for i in tokens.keys():
		if tokens[i] == v:
			return i
	return None

# Analisi della dimensione (in bytes) di un array di elementi serializzato
def arrayrbytes(d):
	rbytes = 0
	if ord(d[0]) == 0: # Nessun elemento
		rbytes = 0
		d = d[1:]
	elif ord(d[0]) == 248: # Numero di elementi di 1 byte
		rbytes = ord(d[1])
		d = d[2:]
	elif ord(d[0]) == 249: # Numero di elementi di 2 byte
		rbytes = ord(d[1])<<8 + ord(d[2])
		d = d[3:]
	else:
		# ??
		raise Exception("%d %x %s" % (ord(d[0]), ord(d[0]), d[0]))
	return rbytes, d

# Decodifica lista di elementi serializzata
def listdecode(d):
	ret = {}
	if ord(d[0]) == arraytypes["LIST_EMPTY"] or ord(d[0]) == arraytypes["LIST_8"] or ord(d[0]) == arraytypes["LIST_16"]:
		rbytes, d = arrayrbytes(d)

		name = readstring(d)
		d = d[1:]

		attributes, d = readattributes(d)

		children = readchildren(d)
		ret = {
			'rbytes': rbytes,
			'name': name,
			'attributes': attributes,
			'children': children
		}
	elif ord(d[0]) == arraytypes["JID_PAIR"]:
		len1 = ord(d[1])
		d1 = readstring2(d[2:2+len1], len1)
		d = d[2+len1:]

		len2 = ord(d[0])
		s = readstring2(d[1:len2], len2)
		ret = {
			'd': d1,
			's': s
		}
		# var d = this.readString(e, e.readByte())
		#   , s = this.readString(e, e.readByte());
	else:
		raise NotImplementedError(ord(d[0]))
	return ret

# Legge una stringa (come token)
def readstring(d):
	# TODO
	if tokens.values().count(ord(d[0])) == 0:
		return None
	return findkey(ord(d[0]))

def readstring2(n, e):
	t = 0
	r = t + e
	o = []
	a = None
	i = t
	d = e
	g = 65533
	while i < r:
		if len(o) > 5e3:
			if a == None:
				a = []
			a.push(fromCharArray(o))
			o = []

		s = 0 | ord(n[i])
		if 0 == (128 & s):
			o.append(s)
		elif d >= 2 and 192 == (224 & s):
			u = 0 | ord(n[i + 1])
			if 128 == (192 & u):
				p = (31 & s) << 6 | 63 & u
				if p >= 128:
					i += 1
					d -= 1
					o.append(p)
				else:
					o.append(g)
			else:
				o.append(g)
		elif d >= 3 and 224 == (240 & s):
			l = 0 | ord(n[i + 1])
			f = 0 | ord(n[i + 2])
			if 128 == (192 & l) and 128 == (192 & f):
				h = (15 & s) << 12 | (63 & l) << 6 | 63 & f
				if h >= 2048 and not (55296 <= h and h < 57344):
					i += 2
					d -= 2
					o.append(h)
				else:
					o.append(g)
			else:
				o.append(g)
		elif d >= 4 and 240 == (248 & s):
			m = 0 | ord(n[i + 1])
			tmp = 0 | ord(n[i + 2])
			b = 0 | ord(n[i + 3])
			if 128 == (192 & m) and 128 == (192 & tmp) and 128 == (192 & b):
				v = (7 & s) << 18 | (63 & m) << 12 | (63 & tmp) << 6 | 63 & b
				if v >= 65536 and v <= 1114111:
					i += 3
					d -= 3
					y = v - 65536
					o.append(55296 | y >> 10)
					o.append(56320 | 1023 & y)
				else:
					o.append(g)
			else:
				o.append(g)
		else:
			o.append(g)
		i += 1
		d -= 1
	w = fromCharArray(o);
	if a != None:
		a.push(w)
		return "".join(a)
	else:
		return w

def fromCharArray(s):
	r = ""
	for i in s:
		r += i
	return r

def readint32(d):
	return ord(d[3]) << 24 | ord(d[2]) << 16 | ord(d[1]) << 8 | ord(d[0]);

def readInt20(d):
	e = 15 & d[0]
	r = d[1]
	n = d[2]
	return (e << 16) + (r << 8) + n

def nibblesToBytes(d):
	t = ord(d[0])
	r = t >> 7
	n = 127 & t
	o = ""
	a = 0
	i = 1
	while a < n:
		f = unpackBytePair(ord(d[i]));
		o += f[0]
		o += f[1]
		a += 1
		i += 1
	if r:
		o = o[0: len(o) - 1]
	return o, d[i+1:]

def unpackBytePair(e):
	t = (240 & e) >> 4
	r = 15 & e
	if not nibbleDecode.has_key(t):
		raise Exception("invalid nibble to unpack: " + t);
	if not nibbleDecode.has_key(r):
		raise Exception("invalid nibble to unpack: " + r);
	o = nibbleDecode[t]
	a = nibbleDecode[r]
	return [o, a]

def getTokenDouble(e, t, r):
	n = None
	o = 256 * e + t;
	if o >= 0 and o < len(r):
		n = r[o]
	else:
		raise Exception("invalid double byte token " + e + " " + t);
	return n, r[o:]

def readstring3(d):
	if len(d) == 0:
		return None, d
	t = ord(d[0])
	d = d[1:]
	if t == -1:
		raise Exception("invalid start token readstring3")
	if t > 2 and t < 236:
		r = findkey(t)
		if "s.whatsapp.net" == r:
			r = "c.us"
		return r, d

	if t == arraytypes["DICTIONARY_0"] or t == arraytypes["DICTIONARY_1"] \
			or t == arraytypes["DICTIONARY_2"] or t == arraytypes["DICTIONARY_3"]:
		n = ord(d[0])
		f, d = getTokenDouble(t - o.DICTIONARY_0, n, d[1:])
		return f, d
	elif t == arraytypes["LIST_EMPTY"]:
		return None, d
	elif t == arraytypes["BINARY_8"]:
		return readstring(d), d[1:]
	elif t == arraytypes["BINARY_20"]:
		return findkey(readInt20(d)), d[3:]
	elif t == arraytypes["BINARY_32"]:
		return findkey(readint32(d)), d[4:]
	elif t == arraytypes["JID_PAIR"]:
		a, d = readstring3(d)
		i, d = readstring3(d)

		if a is not None and i is not None:
			return a + "@" + i, d
		if i is not None:
			return i, d
		raise Exception("invalid jid " + a + "," + i)
	elif t == arraytypes["NIBBLE_8"]:
		r, d = nibblesToBytes(d)
		return r, d
	else:
		raise Exception("invalid string: %x" % t)


# Legge tutti gli attributi al nodo attuale
def readattributes(d):
	attributes = {}
	while len(d) > 0 and ord(d[0]) != 0:
		k = readstring(d)
		if k is None:
			break
		try:
			v = readstring(d[1:])
			if v is None:
				v, d = readRawString(d[1:])
				if v is None:
					v, d = readstring3(d)
			else:
				d = d[2:]
		except:
			pass
		if v is None:
			break
		attributes[k] = v
	return attributes, d

# Legge tutti i figli del nodo attuale
def readchildren(d):
	if len(d) == 0:
		return []
	children = None
	if ord(d[0]) >= 252:
		arr, d = readarray(d)
		try:
			children = {
				'type': 'binary',
				'packet': bp.decodepacket(arr)
			}
		except:
			children = {
				'type': 'binary',
				'packet': str(arr)
			}
	elif ord(d[0]) == arraytypes["LIST_EMPTY"] or ord(d[0]) == arraytypes["LIST_8"] or ord(d[0]) == arraytypes["LIST_16"]:
		elem, d = arrayrbytes(d)
		children = []
		# TODO: xrange ? Se elem è il numero di bytes, forse dobbiamo semplicemente leggere il blocco
		for i in xrange(elem):
			children.append(listdecode(d))
	else:
		s = readstring(d)
		if s is None:
			stringbuf, dnew = readRawString(d)
			if stringbuf is None:
				s, d = readstring3(d[1:])
				children = {
					'type': 'string',
					'packet': s
				}
			else:
				d = dnew
				children = {
					'type': 'string',
					'packet': stringbuf
				}
		else:
			children = {
				'type': 'string',
				'packet': s
			}
			d = d[1:]
	return children

# Legge una stringa grezza del nodo
def readRawString(d):
	if ord(d[0]) == 252:
		stringlen = ord(d[1])
		d = d[2:]
	elif ord(d[0]) == 253:
		stringlen = ord(d[2]) << 8 + ord(d[1])
		d = d[3:]
	elif ord(d[0]) == 254:
		stringlen = ord(d[3]) << 16 + ord(d[1]) << 8 + ord(d[2])
		d = d[4:]
	else:
		return None, d

	if stringlen > len(d):
		return None, d

	stringbuf = ""
	for i in xrange(stringlen):
		stringbuf += d[i]

	return stringbuf, d[stringlen:]

# Legge un array di oggetti
def readarray(d):
	size = 0
	if ord(d[0]) == arraytypes['BINARY_8']:
		size = ord(d[1])
		d = d[2:]
	elif ord(d[0]) == arraytypes['BINARY_20']:
		size = ord(d[2])<<8 + ord(d[1])
		d = d[3:]
	elif ord(d[0]) == arraytypes['BINARY_32']:
		size = ord(d[3])<<16 + ord(d[2])<<8 + ord(d[1])
		d = d[4:]
	elif ord(d[0]) == arraytypes["NIBBLE_8"]:
		r, d = nibblesToBytes(d[1:])
		return r, d
	else:
		raise NotImplementedError("Not implemented size %x %d" % (ord(d[0]), ord(d[0])))

	arr = d[0:size]
	return arr, d[size:]


if __name__ == '__main__':
	with open(sys.argv[1], "rb") as f:
		v = f.read()
		toskip = v.find(",") + 1
		print listdecode(v[toskip:])
