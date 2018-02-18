// inseting all the exports from 'count.js' in 'countArrLen' variable in this
// case, only 'counter' function gets assigned into 'countArrLen' variable...
var countArrLen = require('./count');
var friends = ['Pratik', 'Affan', 'Shihab', 'Mahir'];

// calling the 'counter' function using 'counArrLen' in this module as we have
// assigned the 'counter' function in 'counArrLen' in this module...
console.log(countArrLen(friends));
