var fs = require('fs');

// using createReadStream() to create a stream while reading the file.
// in this process a little chunk of data will be passed to the client thorugh buffer
// instead of the whole data. this will improve the performance cause the user
// wont have to wait for the whole data to load...

// creating a read stream...
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

// this will be fired when a piece of data chunk will be read...
myReadStream.on('data', function(chunk) {
  console.log('Cunk received:');
  // printing the data chunk which has been read...
  console.log(chunk);
})
