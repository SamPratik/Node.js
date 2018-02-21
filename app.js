var fs = require('fs');
var http = require('http');

// creating server...
var server = http.createServer(function(req, res) {
  // printing the path after the IP address and the port number...
  console.log('You have requested to: ' + req.url);
  // matching the path with '/home' or '/' and returning index.html as response...
  if(req.url === '/home' || req.url === '/') {
    // setting the header and content type to html...
    res.writeHead(200, {'Content-Type': 'text/html'});
    // reading index.html chunk by chunk...
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // sending the read content as response to the client...
    myReadStream.pipe(res);
  }
  else if(req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
  } else if(req.url === '/api/friends') {
    myObj = [
      {name: 'Pratik', age: 23},
      {name: 'Affan', age: 24},
      {name: 'Turag', age: 22}
    ]
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(myObj));
  }
  // if none of the path matches then we will return 404.html as response... 
  else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
    myReadStream.pipe(res);
  }
});

server.listen(3000, '127.0.0.1');

console.log('listening to port 3000:');
