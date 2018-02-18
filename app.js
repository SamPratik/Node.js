// we are assigning the module.exports object in stuff. So, stuff is now an
// object and it has the same properties (counter, adder, pi) as module.exports
// and we can access those properties to get the data sent from 'stuff.js'
// module...
var stuff = require('./stuff');

//accessing those properties to get the data from stuff.js module...
console.log(stuff.counter(['Pratik', 'Affan', 'Vote']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));
