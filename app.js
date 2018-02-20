// module required to read and write file...
var fs = require('fs');

// readFile() is used to read the specified file assynchronously. As this is a
// assynchronous function so a callback is used to write the read data to write in
// 'writeme.txt' file using whiteFile()...
fs.readFile('./readme.txt', 'utf8', (err, data) => {
  fs.writeFile('./writeme.txt', data, (err) => {
    console.log(data);
  });
});
