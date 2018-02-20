// module required to read and write file...
var fs = require('fs');

// readFile() is a assynchronous function. it will not block the next code
// from being executed while reading a file. in this case 'test' will be
// logged first and then the content of 'readme.txt' will be logged...

// raeadFile() has a third parameter which is a callback function and it will be
// executed after reading the whole content of a file. This callback function
// takes two parameters(err and data)...
var readme = fs.readFile('./readme.txt', 'utf8', function(err, data) {
  console.log(data);
});

// logging the a message to test the assynchronous method 'readFile()'...
console.log('test');
