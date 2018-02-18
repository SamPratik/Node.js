// module.exports is a blank object, we are setting properties on this module.exports
// object and sending data...

module.exports.counter = function(arr) {
  return 'There are ' + arr.length + ' elements!';
}

module.exports.adder = function(a, b) {
  return `The sum of '${a}' & '${b}' is: ${a+b}`;
}

module.exports.pi = 3.1416;
