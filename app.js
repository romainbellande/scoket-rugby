var express = require('express');
var app = express();

var http = require('http').Server(app);
var fs = require('fs');
var io = require('socket.io')(http);

var port = 8080;

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

http.listen(port);
