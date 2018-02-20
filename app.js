var fs = require('fs');

// before removing the 'stuff' directory using rmdir() method you must need to
// blank the 'stuff' directory. thats why we are deleting the writeme.txt file
// first using unlink() method before removing the 'stuff' directory..
fs.unlink('./stuff/writeme.txt', function() {
  fs.rmdir('./stuff', function() {
    console.log('Successfully removed the stuff directory!');
  })
});
