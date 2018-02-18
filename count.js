// A function expression...
var counter = function(arr) {
  return 'There are ' + arr.length + ' elements in the array!';
}

// whatever i want to make available outside of this module i will just export
// them using 'module.exports' in this case i am just exporting 'counter' function
// Now this function can be accessible in other modules...
module.exports = counter;
