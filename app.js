// 'evnets' is a core module which is included in this module to call EventEmitter()
// constructor...
var events = require('events');
var myEmitter = new events.EventEmitter();

// EventEmitter() is used to listen to custom evnet...
myEmitter.on('someEvent', function(msg) {
  console.log(msg);
});

// EventEmitter() is used to fire custom event...
myEmitter.emit('someEvent', 'This is a message!');
