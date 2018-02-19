// 2 core modules...
var events = require('events');
var util = require('util');

// a constructor...
var Person = function(name) {
  this.name = name;
}

// using util.inherits() 'Person' will inherit 'EventEmitter' so that any
// instatiates(pratik, affan, turag) of 'Person' can have custom event...
util.inherits(Person, events.EventEmitter);

// objects instantiating 'Person' and setting corresponding name property...
var pratik = new Person('Pratik');
var affan = new Person('Affan');
var turag = new Person('Turag');

// array of instatiates of 'Person'...
var people = [pratik, affan, turag];

// adding listener for custom events to every instantiates(pratik, affan, turag)
// of 'Person'...
people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name + msg);
  });
});

// firing custom event for every instatiates of 'Person'...
pratik.emit('speak', ', hey dudes!');
affan.emit('speak', ', hey dudes!');
turag.emit('speak', ', hey dudes!');
