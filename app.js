// included express package...
var express = require('express');

// initializes express() so that we can use its functionality...
var app = express();

// sending a 'id' parameter in the URL and grabbing the parameter and sending to
// the client...
app.get('/profile/:id', function(req, res) {
  res.send('This is the profile of id: ' + req.params.id);
});

// setting up the port number...
app.listen(3000);
