// module required to read and write file...
var fs = require('fs');

// readFileSync() is used to read a file synchronously(means it will not move to next
// code until finishes reading the defined file) and 'utf8' is used to convert the
// binary datas into real characters...
var readme = fs.readFileSync('./readme.txt', 'utf8');

// writting synchronously the content of 'readme.txt' file to the 'writeme.txt' file... 
fs.writeFileSync('./writeme.txt', readme);
