var fs = require('fs');

// removing a directory synchronously(that means it will block the next codes
// from being executed until it removes the stuff folder)...
fs.rmdirSync('./stuff');
