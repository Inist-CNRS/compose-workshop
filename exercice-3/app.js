'use strict';

const app = require('express')(),
      http = require('http').Server(app),
      io = require('socket.io')(http),
      PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(PORT, () => {
  console.log('Running on http://localhost:' + PORT);
});
