const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9966 });

console.warn("WebSocket Server Started");

const sendTexture = (ws, message) => {
  try {
    const j = JSON.parse(message);
    ws.send(j.texture);
  } catch (e) {
    console.error(e)
  }
}

const getIsTexture = (message) => {
  try {
    const j = JSON.parse(message);
    if (j.type === 'texture' && !!j.texture) return true;
    return false;
  } catch (e) {
    console.error(e);
    return false;
  }
}

wss.on('connection', function connection(ws) {
  console.warn('connection!');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    if(getIsTexture(message)) {
      sendTexture(ws, message);
    };
  });
});