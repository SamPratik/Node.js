var fs = require('fs');
var http = require('http');

// creating a server which will return a response...
var server = http.createServer(function(req, res) {
  // req.url returns the path after the ip address and the port number...
  console.log('The request path is: ' + req.url);
  // setting the response header to JSON...
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 23
  };
  // sending the myObj as response but we cannot send object, we can send string
  // so we will convert the object as json...
  res.end(JSON.stringify(myObj));
});

// now, if we request to 127.0.0.1:3000 we will get the content of index.html...
server.listen(3000, '127.0.0.1');
console.log('listening to port 3000:');
