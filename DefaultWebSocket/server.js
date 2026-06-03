const http = require('http');
const fs = require('fs');
const path = require('path');
const websocket = require('ws');

const PORT = 7000;

const server = http.createServer((req, res) => {

});

const wss = new websocket.WebSocketServer({ server });

wss.on('headers', (headers, req) => {console.log(headers);});
wss.on('connection', (ws, req) => {
    ws.on('message', (data) => {console.log(data.toString())});
    ws.send('Hello client');
});

server.listen(PORT, () => {
   console.log(`http://localhost:${PORT}`);
});
