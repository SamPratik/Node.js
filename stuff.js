var counter = function(arr) {
  return 'There are ' + arr.length + ' elements!';
}

var adder = function(a, b) {
  return `The sum of '${a}' & '${b}' is: ${a+b}`;
}

var pi = 3.1416;

// module.exports is a blank object, we are setting properties on this module.exports
// object and sending data...
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
