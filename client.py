from websocket import create_connection

ws = create_connection("ws://localhost:5000/ws")

ws.send("Hello, World")
print "Sent"
# print "Reeiving..."
# result =  ws.recv()
# print "Received '%s'" % result
ws.close()
