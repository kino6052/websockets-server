const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9966 });

console.warn("WebSocket Server Started");

wss.on('connection', function connection(ws) {
  console.warn('connection!');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});