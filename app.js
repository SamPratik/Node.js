var fs = require('fs');

// Reading content from readme.txt file chunk by chunk instead of reading the
// whole content...
var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
// will write the content from readme.txt to writeme.txt chunk by chunk...
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// pipe() will take all the heavy lifting for us. it will listen to the data event
// which is fired after every chunk is read and then take that chunk and write that
// chunk to the 'myWriteStream'...
myReadStream.pipe(myWriteStream);
