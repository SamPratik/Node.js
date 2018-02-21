var express = require('express');

var app = express();

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/404.html');
})
app.listen(3000);
