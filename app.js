var fs = require('fs');

// creating a directory synchronously(that means it will block the next codes
// from being executed until it creates the stuff folder)...
fs.mkdirSync('./stuff');
