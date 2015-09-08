var app = require('express')();
// use express to handle requests made to http server
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a client connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('a client disconnected');
  });
});

http.listen(3000, function(){
  console.log('http server listening on port: ' + port)
});
