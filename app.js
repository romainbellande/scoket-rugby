var socket = require('socket.io');
var http = require('http');
var fs = require('fs');

var port = 8080;

var page = null;
fs.readFile('./index.html',function(err,data){
  page = data;
  console.log(page);
});
var server = http.createServer(function(req,res){
  res.end(page);
});

server.listen(port);
