// included express package...
var express = require('express');

// initializes express() so that we can use its functionality...
var app = express();

// if a get request is sent to '/' then a response will be returned but we dont
// need to set up the content type. express is clever enough to guess the content
// type and send the response to the client. in this case the response is a string...
app.get('/', function(req, res) {
  res.send('This is homepage');
});

app.get('/contact', function(req, res) {
  res.send('This is contact page!');
});

// setting up the port number...
app.listen(3000);
