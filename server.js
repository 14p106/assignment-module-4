var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.listen(8000);
app.use(express.static(__dirname + "/"));
console.log("server running 8000")