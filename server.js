const http = require('http');
const websocket = require('ws');

const server = http.createServer((res, req) => {
   req.end('----------connect-------------') 
});
const ws = new websocket.WebSocketServer({server});

ws.on('headers', (headers, req) => { console.log(headers)});
ws.on('connection', (ws, req) => {
    ws.send()
})

server.listen(8000, () => {
    console.log('http://localhost:8000');
});