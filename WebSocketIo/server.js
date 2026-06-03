const express = require('express');
const socketIo = require('socket.io');

const app = express();
app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(7000, () => {console.log('http://localhost:7000')})

const io = socketio(expressServer);

io.on('conntection', () => {
    console.log('Setup Connection!');
});