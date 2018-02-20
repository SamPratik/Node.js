// including this core module http to create a server...
var http = require('http');

// creating a server which will return a response when a client will request to
// this server using a IP address and a port number of this server. While sending
// the response from the server we need to set up the response head using
// res.writeHead(). in this head we will define the content-type which will be
// returned from the server...
var server = http.createServer(function(req, res) {
  // req.url will provide the path which is after the ip address and the port
  // number...
  console.log('Request is made to the following path: ' + req.url);
  // setting the response head. 200 means everything is ok and 404 means server
  // not found. we are also setting the content type of the response here...
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // sending the response...
  res.end('Hey Pratik!');
});

// defining the ip address and the port number where we will request to get the
// corresponding response from the server...
server.listen(3000, '127.0.0.1');

console.log('Listening to port 3000:');
