var fs = require('fs');

// assynchrounous mkdir() function is used to create stuff folder. then readFile()
// is used to read 'readme.txt' file and then we have used assynchrounous witeFile()
// to white the read content into 'stuff/writeme.txt'...
fs.mkdir('./stuff', function() {
  fs.readFile('./readme.txt', function(err, data) {
    fs.writeFile('./stuff/writeme.txt', data, function(err) {
      console.log('successfully written in the file!');
    });
  });
});
