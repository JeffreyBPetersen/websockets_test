var app = require('express')();
// use express to handle requests made to http server
var http = require('http').Server(app);

var port = 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('http server listening on port: ' + port)
});
