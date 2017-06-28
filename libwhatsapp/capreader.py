from scapy.all import *
from libwhatsapp.whatsappdecrypt import decryptandparse, loadkeys
from wadeserializer import listdecode
import json

def decodepcap(fname):
	p = rdpcap(fname)
	sessions = p.sessions()
	for i in sessions:
		for packet in sessions[i]:
			if not packet.haslayer(TCP):
				continue
			if (packet[TCP].dport == 5000 or packet[TCP].sport == 5000) \
					and len(packet[TCP].payload) > 0 \
					and str(packet[TCP].payload)[:3] != "GET" \
					and str(packet[TCP].payload)[:4] != "POST" \
					and str(packet[TCP].payload)[:4] != "HTTP":
				payload = str(packet[TCP].payload)
				while len(payload) > 0:
					# WebSocket uses 2 bytes for protocol infos, 4 for mask code if needed, and remaining for payload (max size: 2^7 - 1)
					fin = (ord(payload[0]) & 128) > 0
					opcode = ord(payload[0]) & 15
					# TODO manage special opcodes and fin
					masked = (ord(payload[1]) & 128) > 0
					length = ord(payload[1]) & 127
					if length == 126:
						length = ord(payload[2]) << 8 | ord(payload[3])
						payload = payload[4:]
					elif length == 127:
						length = ord(payload[2]) << 56 | ord(payload[3]) << 48 | ord(payload[4]) << 40 | ord(payload[5]) << 32 \
						 		| ord(payload[6]) << 24 | ord(payload[7]) << 16 | ord(payload[8]) << 8 | ord(payload[9])
						payload = payload[10:]
					else:
						payload = payload[2:]

					if masked:
						maskingkey = payload[:4] * 32
						payload = payload[4:]

					data = payload[:length]
					payload = payload[length:]

					if masked:
						newdata = ""
						for i in xrange(len(data)):
							newdata += chr(ord(data[i]) ^ ord(maskingkey[i % 4]))
						data = newdata

					if data.count(",") < 1:
						if data[0] == '!':
							pass #print "Keepalive %d" % (int(data[1:]))
						else:
							print packet.show()
							raise Exception("Packet format error")
					elif data == '?,,':
						pass #print "Keepalive request"
					else:
						toskip = data.find(",") + 1
						# Sometimes there are two comma...
						if toskip < len(data) and data[toskip] == ',':
							toskip += 1

						if toskip >= len(data):
							# Empty message (ACK)
							continue
							pass

						messagetag = data[:toskip]
						# is it a plain/text JSON?
						try:
							value = json.loads(data[toskip:])
							print value
							continue
						except Exception as e:
							pass

						# is it encrypted?
						try:
							print decryptandparse(data[toskip:], loadkeys("../tests/keyset2.json"), True)
							continue
						except Exception as e:
							#print e
							pass

						# is it plain binary protocol?
						try:
							print listdecode(data[toskip:])
							continue
						except Exception as e:
							print e
							pass

						print "Decoding error...: "
						print packet.show()
						print repr(data)
						exit(1)

if __name__ == '__main__':
	decodepcap("../pcapng/whatsapp3.pcap")
