# coding=utf-8
import binaryprotocol as bp
import sys
from wadeserializer import tokens, arraytypes, nibbleDecode, listdecode

def serialize(data, attrchild=True):

	if not attrchild and type(data) is list and len(data) == 0:
		return ""

	ret = bytearray()
	ptype = arraytypes['LIST_EMPTY'] if (not attrchild and type(data) is dict and len(data['children']) == 0) \
		or (not attrchild and type(data) is list and len(data) == 0) else arraytypes['LIST_8']
	ret.append(chr(ptype))

	if attrchild:
		# Get final size TODO: add children bytes
		size = len(data['attributes']) * 2 + (1 if len(data['children']) == 0 else 2) \
			+ (1 if type(data['children']) is dict and data['children'].has_key('type') and data['children']['type'] == 'string' else 0)
		ret.append(size)

		# name
		if not tokens.has_key(data['name']):
			raise Exception("string-token error")
		ret.append(tokens[data['name']])

		# attrs
		for k in data['attributes']:
			ret.append(putstring(k))
			ret = ret + putstring(data['attributes'][k])

	if ptype == arraytypes['LIST_EMPTY']:
		return ret

	if not attrchild:
		ret.append(len(data))
		for c in data:
			ret += serialize(c, True)
		return ret

	# Make children
	if type(data['children']) is list:
		children = serialize(data['children'], False)
	elif type(data['children']) is dict and data['children'].has_key('type') and data['children']['type'] == 'string':
		children = putstring(data['children']['packet'])
	elif type(data['children']) is dict and data['children'].has_key('type') and data['children']['type'] == 'binary':
		children = bytearray()

		binary = bp.encodepacket(data['children']['packet'])

		lentype = None
		binlen = len(binary)
		if binlen < 256:
			lentype = arraytypes['BINARY_8']
			children += chr(binlen)
		elif binlen < 65536:
			lentype = arraytypes['BINARY_20']
			children += chr(binlen) & 0x00FF
			children += chr(binlen) & 0xFF00
		elif binlen < 16777216:
			lentype = arraytypes['BINARY_32']
			children += chr(binlen) & 0x0000FF
			children += (chr(binlen) & 0x00FF00) >> 8
			children += (chr(binlen) & 0xFF0000) >> 16
		else:
			# Nibbles
			raise NotImplementedError("Nibbles size not implemented")

		children += binary
	elif type(data['children']) is bytearray:
		children = data['children']
	else:
		raise Exception(str(type(data['children'])) + " : " + repr(data['children']))

	if ptype == arraytypes['LIST_8']:
		ret += children
	elif ptype == arraytypes['LIST_16']:
		raise NotImplementedError("LIST_16 not implemented")
	return ret


def putstring(d):
	if tokens.has_key(d):
		return chr(tokens[d])
	else:
		ret = bytearray()
		l = len(d)
		typelen = None
		if l < 256:
			typelen = 252
			ret.append(typelen)
			ret.append(chr(l))
		elif l < 65536:
			typelen = 253
			ret.append(typelen)
			ret.append(chr(l & 255))
			ret.append(chr((l >> 8) & 255))
		elif l < 16777216:
			typelen = 254
			ret.append(typelen)
			ret.append(chr(l & 255))
			ret.append(chr((l >> 8) & 255))
			ret.append(chr((l >> 16) & 255))
		else:
			raise NotImplementedError()

		ret += d
		return str(ret)

	# TODO: readstring3 not implemented


if __name__ == '__main__':
	v = serialize({'attributes': {'epoch': '1', 'type': 'chat'},
		'children': [],
		'name': 'query',
		'rbytes': 5
		})
	print "Chat"
	print repr(v)
	print listdecode(str(v))
	print "*" * 50

	v = serialize({'attributes': {'epoch': '1', 'type': 'contacts'},
		'children': [],
		'name': 'query',
		'rbytes': 5
	})
	print "Contacts"
	print repr(v)
	print listdecode(str(v))
	print "*" * 50

	v = serialize({'attributes': {'epoch': '1', 'type': 'set'},
		'children': [{'attributes': {'type': 'available'},
		            'children': [],
		            'name': 'presence',
		            'rbytes': 3}],
		'name': 'action',
		'rbytes': 6
	})
	print "Presence"
	print repr(v)
	print listdecode(str(v))
	print "*" * 50

	v = serialize({'attributes': {'type': 'emoji'},
		'children': [{'attributes': {'code': '\xf0\x9f\x98\x80', 'value': '1.0'},
		            'children': [],
		            'name': 'item',
		            'rbytes': 5}],
		'name': 'response',
		'rbytes': 4
	})
	print "Emoji"
	print repr(v)
	print listdecode(str(v))
	print "*" * 50

	v = serialize({'attributes': {},
		  'children': [{'attributes': {'type': 'frequent'},
		                'children': [{'attributes': {},
		                              'children': {'packet': '391234567890',
		                                           'type': 'string'},
		                              'name': 'message',
		                              'rbytes': 3},
		                             {'attributes': {},
		                              'children': {'packet': '391234567890',
		                                           'type': 'string'},
		                              'name': 'message',
		                              'rbytes': 3},
		                             {'attributes': {},
		                              'children': {'packet': '391234567890',
		                                           'type': 'string'},
		                              'name': 'message',
		                              'rbytes': 3}],
		                'name': 'contacts',
		                'rbytes': 4}],
		  'name': 'action',
		  'rbytes': 2})
	print "Frequent"
	print repr(v)
	print listdecode(str(v))
	print "*" * 50

	v = serialize({'attributes': {'add': 'last'},
		'children': [{'attributes': {},
		            'children': {'packet': [{'type': 'jid',
		                                     'value': '391230987654@s.whatsapp.net'},
		                                    {'type': 'fromme', 'value': 1},
		                                    {'type': 'messageid',
		                                     'value': '3EB06485910522C93941'},
		                                    {'type': 'message',
		                                     'value': [{'type': 'text',
		                                                'value': "Questa e' una prova"}]},
		                                    {'type': 'timestamp',
		                                     'value': 1481132707},
		                                    {'type': 'status', 'value': 3}],
		                         'type': 'binary'},
		            'name': 'message',
		            'rbytes': 2},
		           {'attributes': {},
		            'children': {'packet': [{'type': 'jid',
		                                     'value': '391230987654@s.whatsapp.net'},
		                                    {'type': 'fromme', 'value': 1},
		                                    {'type': 'messageid',
		                                     'value': '3EB06485910522C93941'},
		                                    {'type': 'message',
		                                     'value': [{'type': 'text',
		                                                'value': "Questa e' una prova"}]},
		                                    {'type': 'timestamp',
		                                     'value': 1481132707},
		                                    {'type': 'status', 'value': 3}],
		                         'type': 'binary'},
		            'name': 'message',
		            'rbytes': 2},
		           {'attributes': {},
		            'children': {'packet': [{'type': 'jid',
		                                     'value': '391230987654@s.whatsapp.net'},
		                                    {'type': 'fromme', 'value': 1},
		                                    {'type': 'messageid',
		                                     'value': '3EB06485910522C93941'},
		                                    {'type': 'message',
		                                     'value': [{'type': 'text',
		                                                'value': "Questa e' una prova"}]},
		                                    {'type': 'timestamp',
		                                     'value': 1481132707},
		                                    {'type': 'status', 'value': 3}],
		                         'type': 'binary'},
		            'name': 'message',
		            'rbytes': 2}],
		'name': 'action',
		'rbytes': 4})
	print "AddLast"
	print repr(v)
	print listdecode(str(v))
	print "*" * 50
