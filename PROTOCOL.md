
Version 0.2.2730

# Local storage

On web browser, whatsapp sets these strings:

* `localStorage.WASecretBundle`: a JSON with keys for encryption and signature
* `localStorage.WAToken1`: key client token
* `localStorage.WAToken2`: key server token
* `localStorage.WALangPref`: two-char language code
* `localStorage.WABrowserId`: a browser ID self-generated

# Main WebSocket channel protocol

The socket used for C&C is bound to `w[1-8].web.whatsapp.com`. By now these domains
are CNAME of `dyn.web.whatsapp.com` which is a round-robin `A` service.

The socket is protected with SSL/TLS. No WebSocket extensions are used. The endpoint is `/ws`.

## Encryption

Binary messages (message text and others kind of communications) are encrypted with
AES-CBC (PKCS7 padded) and signed with HMAC-SHA256.

The format of binary websocket is:

	<ids>,<signature><iv><ciphertext>

* `<ids>` is the plaintext ID/code that the webapp use to link this message to others (see above).
* `<signature>` is the 32 byte HMAC-SHA256 signature of the remaining (IV and ciphertext)
* `<iv>` is the IV for AES-CBC
* `<ciphertext>` is the binary protocol / serialized data (see below) encrypted

Keys are stored into local storage, into the Web Browser. By now you should estract them manually.

Please note that sometimes (most of the time on sending packets) two bytes are added
before `<signature>`. Meanings is unknown.

## Protocol

Packets are in-order.

### pre-login

#### qrcode regeneration request

	1482519306.--1,["admin","Conn","reref"]

#### qrcode regeneration response

	1482519306.--1,{"status":200,"ref":"0@/ZQpqvCgwCD3d3dzgbCaU/HkgzzT+lttQgoL+l5VBpXPR9m/d0eRgibW","ttl":20000}

### Init

Packets 33->56 (wireshark1.pcapng.gz)

#### Login Init (c->s)

	1481798371.--0,["admin","init",[0,2,2730],["Linux x86_64","Firefox"],"5vpI1TwSAZUesd0vsCNJ4Q==",false]

This packet contains some info about version and OS, and a base64-encoded string called "browser ID" (found on localStorage.WABrowserId)

Last parameters (boolean) is: !this.isIncognito && !!b.getRememberMe()

##### Browser ID

	id: function i() {
        var e = r(15), i = e.getBrowserId();
        if (i)
            return i;
        var t = new Uint32Array(4);
        window.crypto.getRandomValues(t);
        var n = CryptoJS.lib.WordArray.create(t);
        i = CryptoJS.enc.Base64.stringify(n);
		e.setBrowserId(i);
		return i
    }

#### Login Init response (s->c)

	1481798371.--0,{"status":200,"ref":"0@2K01cKKVJGRyADT3cT3TTQRP+qn2axB7PLZ7TDZOJT1e1OrKBSVAHqfn","ttl":20000,"update":false,"curr":"0.2.2730","time":1481798371929.0}

#### Login auth (c->s)

	1481798371.--1,["admin","login","tBBNlZlb/6nlX6GtM3Fw66AgnXElWwyYOYVmjKD7MZo=","0@3PAE9OnHOQeL29k/X+zXfp6SYZpuHLhazQRIIeotMgtut9iwSsVZuUTTzjducvyCZp1/AIACwb7eYg==","5vpI1TwSAZUesd0vsCNJ4Q==","takeover"]

Here we have:

* "admin" and "login" literals
* "client" client token (see at top)
* "server" server token (see at top)
* "browser id" (see above)
* "takeover" or "reconnect" literals

#### Login auth response (s->c)

4 Packets (3 text, 1 binary):

	s1,["Conn",{"ref":"0@G8kirzpZCKC3mJpk7uHH6aKCAYU/009+bnujFPMRHiijAkVx4pRGpbyI","wid":"391234567890@c.us","connected":true,"isResponse":"true","serverToken":"0@16tpmIEgDKsCBE8EEfEYfYsOx6owPiDQhKUouV4lEmbBToMgHmHGmridFFusjOEumJtk4jS9rYIY7A==","browserToken":"0@hJe75y+lm4BukKVTCOI4SZCX+1sEi2zyLxsqWw8020jHk70ViGwk/OaiVdgQfK/puPL4zYhQTH6HfNfTXommBT3ls5+YbL8oHRX0nP3xFMUK15iDNQi2CY7+pwx0UAvt+ZMhPy2pdWgZsLv0QaOCpQ==","clientToken":"pjZKAdSF7ZqmhByZ2dfcC0m08TKd5Wgn/imRiOZQECY=","lc":"IT","lg":"it","is24h":true,"protoVersion":[0,11],"binVersion":7,"battery":90,"plugged":false,"platform":"android","features":{"DOC_TYPES":"csv,doc,docx,pdf,ppt,pptx,rtf,txt,xls,xlsx","URL":true},"phone":{"wa_version":"2.16.396","mcc":"222","mnc":"001","os_version":"4.2.2","device_manufacturer":"alps","device_model":"106_v89_jbla768_fwvga","os_build_number":"2206_jbla768_f_20140429"},"tos":0,"pushname":"A"}]

Here the server updates serverToken and clientToken, as well as provide us "ref" token and "browserToken" (seems used only for logout).

	1481798371.--1,{"status":200}

Maybe this is a reply.

	s2,["Stream","update",false,"0.2.2730"]

If requested, we need to "update" our version. TODO: library should monitoring it

	s3,["Props",{"bucket":"b","gifSearch":"tenor","SPAM":true,"SET_BLOCK":true,"MESSAGE_INFO":true,"media":64,"maxSubject":25,"maxParticipants":257,"videoMaxEdge":960,"imageMaxKBytes":1024,"imageMaxEdge":1600}]

The 4th one is encrypted (binary). You can find the packet into `tests/pkt_3_14-3`.
It contains the contact list:

	{'attributes': {'type': 'chat'},
	  'children': [{'attributes': {'jid': '391234567890@count'},
	                'children': {'packet': [], 'type': 'binary'},
	                'name': 'chat',
	                'rbytes': 9},
	               {'attributes': {'jid': '391231212123@count'},
	                'children': {'packet': [], 'type': 'binary'},
	                'name': 'chat',
	                'rbytes': 9},
	               {'attributes': {'jid': '4412345412343@count'},
	                'children': {'packet': [], 'type': 'binary'},
	                'name': 'chat',
	                'rbytes': 9}],
	  'name': 'response',
	  'rbytes': 4}

#### Login auth response 2 (s->c)

Last message for each chat, binary encoded and encrypted. `tests/pkt_3_14-5`

	{'attributes': {'add': 'last'},
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
	  'rbytes': 4}

#### Login auth response 3 (s->c)

The packet is encrypted (binary). You can find the packet into `tests/pkt_3_16`
It seems to be the same as the 4th of login auth response 1.

	{'attributes': {},
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
	  'rbytes': 2}

#### Login post-auth request 1 (c->s)

The packet is encrypted (binary-masked). You can find the packet into `tests/pkt_3_18`
Maybe this packets is used to query active chats

	{'attributes': {'epoch': '1', 'type': 'chat'},
	  'children': [],
	  'name': 'query',
	  'rbytes': 5}

#### Login post-auth request 2 (c->s)

The packet is encrypted (binary-masked). You can find the packet into `tests/pkt_3_20`
Maybe this packets is used to query contact list

	{'attributes': {'epoch': '1', 'type': 'contacts'},
	  'children': [],
	  'name': 'query',
	  'rbytes': 5}

#### Login post-auth request 3 (c->s)

The packet is encrypted (binary-masked). You can find the packet into `tests/pkt_3_22`
This packets is used set the presence (available|unavailable)

	{'attributes': {'epoch': '1', 'type': 'set'},
	  'children': [{'attributes': {'type': 'available'},
	                'children': [],
	                'name': 'presence',
	                'rbytes': 3}],
	  'name': 'action',
	  'rbytes': 6}

#### Login post-auth request 4 (c->s)

The packet is encrypted (binary-masked). You can find the packet into `tests/pkt_3_24`
Maybe this packets is used to request emoji?

	{'attributes': {'epoch': '1', 'type': 'emoji'},
	  'children': [],
	  'name': 'query',
	  'rbytes': 5}

#### Login query-picture request 1 (c->s)

	371.--6,,["query","ProfilePicThumb","391234567890@c.us"]

#### Login post-auth response 1 (s->c)

2 packets.

The packet is encrypted (binary-masked). You can find the packet into `tests/pkt_3_44-1`
Apparently it's a dump of last messages (reply for chats? - see below)

	{'attributes': {'add': 'before', 'last': 'true'},
	  'children': [{'attributes': {},
	                'children': {'packet': [{'type': 'jid',
	                                         'value': '391234567890@s.whatsapp.net'},
	                                        {'type': 'fromme', 'value': 1},
	                                        {'type': 'messageid',
	                                         'value': '3EB09F24FC9C2C2D8683'},
	                                        {'type': 'message',
	                                         'value': [{'type': 'text',
	                                                    'value': 'test'}]},
	                                        {'type': 'timestamp',
	                                         'value': 1481879920},
	                                        {'type': 'status', 'value': 3}],
	                             'type': 'binary'},
	                'name': 'message',
	                'rbytes': 2},
	               {'attributes': {},
	                'children': {'packet': [{'type': 'jid',
	                                         'value': '391234567890@s.whatsapp.net'},
	                                        {'type': 'fromme', 'value': 1},
	                                        {'type': 'messageid',
	                                         'value': '3EB09F24FC9C2C2D8683'},
	                                        {'type': 'message',
	                                         'value': [{'type': 'text',
	                                                    'value': 'test'}]},
	                                        {'type': 'timestamp',
	                                         'value': 1481879920},
	                                        {'type': 'status', 'value': 3}],
	                             'type': 'binary'},
	                'name': 'message',
	                'rbytes': 2},
	               {'attributes': {},
	                'children': {'packet': [{'type': 'jid',
	                                         'value': '391234567890@s.whatsapp.net'},
	                                        {'type': 'fromme', 'value': 1},
	                                        {'type': 'messageid',
	                                         'value': '3EB09F24FC9C2C2D8683'},
	                                        {'type': 'message',
	                                         'value': [{'type': 'text',
	                                                    'value': 'test'}]},
	                                        {'type': 'timestamp',
	                                         'value': 1481879920},
	                                        {'type': 'status', 'value': 3}],
	                             'type': 'binary'},
	                'name': 'message',
	                'rbytes': 2},
					...
	               {'attributes': {},
	                'children': {'packet': [{'type': 'jid',
	                                         'value': '391234567890@s.whatsapp.net'},
	                                        {'type': 'fromme', 'value': 1},
	                                        {'type': 'messageid',
	                                         'value': '3EB09F24FC9C2C2D8683'},
	                                        {'type': 'message',
	                                         'value': [{'type': 'text',
	                                                    'value': 'test'}]},
	                                        {'type': 'timestamp',
	                                         'value': 1481879920},
	                                        {'type': 'status', 'value': 3}],
	                             'type': 'binary'},
	                'name': 'message',
	                'rbytes': 2}],
	  'name': 'action',
	  'rbytes': 6}

The packet is encrypted (binary-masked). You can find the packet into `tests/pkt_3_44-2`
It contains a checksum for contact list

	{'attributes': {'checksum': '5UBQhqH4qM1TC0nvNBHtFag==', 'type': 'contacts'},
	  'children': [],
	  'name': 'response',
	  'rbytes': 5}

#### Login post-auth response 2 (s->c)

2 packets: `tests/pkt_3_51-1` and `tests/pkt_3_51-2`.

The former contains a reponse with tag "duplicate" for chat, the latter contains the same for contacts.

Pkt_3_51-1:

	{'attributes': {'duplicate': 'true', 'type': 'chat'},
	  'children': [],
	  'name': 'response',
	  'rbytes': 5}

Pkt_3_51-2:

	{'attributes': {'duplicate': 'true', 'type': 'contacts'},
	  'children': [],
	  'name': 'response',
	  'rbytes': 5}

#### Login post-auth response 3 (s->c)

`tests/pkt_3_53` contains the emoji response

	{'attributes': {'type': 'emoji'},
	  'children': [{'attributes': {'code': '\xf0\x9f\x98\x80', 'value': '1.0'},
	                'children': [],
	                'name': 'item',
	                'rbytes': 5}],
	  'name': 'response',
	  'rbytes': 4}

### JID picture query

Packets 60, 75,

#### JID picture request (c->s)

	371.--7,,["query","ProfilePicThumb","391234567890@c.us"]

#### JID picture ACK (s->c)

	371.--7,


#### JID picture response (s->c)

	371.--7,{"tag":"1430075072"}

Then this URL is downloaded for the Picture: https://dyn.web.whatsapp.com/pp?t=s&u=391234567890%40c.us&i=1430075072&ref=&tok=

Query String parameters:

* `t` unknown (maybe command?)
* `u` the user for the picture
* `i` the tag that we received
* `ref` is the same "ref" that we found into INIT packets (Login auth response)
* `tok` is the same "serverToken" we found into INIT packets

Note that the response can be:

	371.--9,{"status":404}

### JID last-seen

#### Last-seen request (c->s)

	371.--10,,["query","Presence","lastseen","391234567890@c.us"]

#### Last-seen ACK (s->c)

	371.--10,

#### Last-seen response (s->c)

	371.--10,{"t":1481789838}

I think that, as for pictures, the response JSON can contains only "status" with value "404" for full-privacy users.

### Keep-alive

#### Keep-alive request (c->s)

	?,,

#### Keep-alive response (s->c)

	!1481799299025

It's unknown if the time is only for web-client checking, or also for phone-checking.

### Send messages

#### Send message request (c->s)

Binary-encrypted packet (see Binary protocol chapter below). Decoded with this library:

	{'attributes': {'epoch': '103', 'type': 'relay'}, 'elements': 6, 'name': 'action', 'children': [{'attributes': {}, 'elements': 2, 'name': 'message', 'children': [[{'type': 'jid', 'value': '391234567890@s.whatsapp.net'}, {'type': 'fromme', 'value': 1}, {'type': 'messageid', 'value': '3EB06792C2106FE24217'}, {'type': 'message', 'value': [{'type': 'extended-message', 'value': [{'type': 'text', 'value': 'prova1234567890'}, {'type': 'context', 'value': None}]}]}, {'type': 'timestamp', 'value': 1481879713}, {'type': 'status', 'value': 1}]]}]}

#### Send message ACK (s->c)

	3EB06792C2106FE24217,

#### Send message response (s->c)

	3EB06792C2106FE24217,{"status":200,"t":1481879714}

This packet marks the packet as "sent", not "delivered". TODO: check this statement

#### Reconnection (s->c)

Phone reconnection infos

1 text packet

	s22,["Conn",{"protoVersion":[0,11],"binVersion":7,"phone":{"wa_version":"2.16.396","mcc":"222","mnc":"088","os_version":"6.0.1","device_manufacturer":"LGE","device_model":"hammerhead","os_build_number":"MMB29Q"},"features":{"DOC_TYPES":"csv,doc,docx,pdf,ppt,pptx,rtf,txt,xls,xlsx","URL":true},"pushname":"E"}]

### TODO

Pkts 347, 197

## Binary protocol

Some WebSocket packets are stored/serialized in binary TLV format. Some points:

* Strings are tokenized, eg. an integer is written in place of a string
* Numbers are stored as fixed type (int8, int16, int32) or in a variable-size type
* Text is always UTF 8

TLV structure:

	<type><length><payload>

`<type>` and `<length>` are VarInts. Length includes only the `<payload>` part.

TLV records can be nested of course.

## Serialized data

Some packets are serialized data. A "serialized-packet" contains nodes with different types:

* Lists
* JID (pair)
* Dictionaries
* Binary data
* Nibble
* String-token
* Raw strings

At first, you can find:

* Lists
* JID

### Lists

	<type><length><name><attributes><items>

List type can be LIST_EMPTY, LIST_8 or LIST_16

* If LIST_EMPTY, there are no elements/attributes
* If LIST_8, the next byte (8-bit unsigned int) is the list length
* If LIST_8, next 2 bytes (16-bit unsigned int) is the list length

Then you find a "string-token" (1 byte - see source for mapping) for list name

Then, you can find the attribute list. An attribute is a key-value pair, where "key"
is a string-token, and "value" can be any type.

Last item is child/children: it can be a bytearray (binary-protocol), a list, a string-token or raw string.

### JID pair

Is a pair of string-token items

### De-serialized messages

* name=query
	* type=emoji
	* type=contacts
	* type=chat
	* type=receipt
		* name=last (attributes: jid, children: msgid)
* name=action
	* type=relay
		* name=messages (for N messages)
	* type=set
		* name=presence
			* type=available
			* type=unavailable
	* add=last
		* name=message (for N messages)
	* add=before and last=true
		* type=message (for N messages)
	* (no type)
		* name=contacts
			* type=frequent
* name=response
	* type=chat and duplicate=true
	* type=contacts and duplicate=true
	* type=emoji
		* name=item (see above)

## VarInt

A VarInt is a variable-size type (grows as needed). To do so, first 4 bytes are
limited to 7 bits, then starting from the 4th byte is stored the remainder of
integer division (128, as we store only 7 bits).

The first bit of each byte is then flipped to 1, except for the last one (it's
used to indicate the last byte)

The current implementation into this library doesn't support negative values,
nor integer that doesn't fit into 5 bytes (7-bit encoded, so >= 34359738368).
