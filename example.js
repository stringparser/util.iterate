'use strict';

var iterate = require('./.');

console.log('--');
iterate(3, function(value, key){
  console.log.apply(console, arguments);
});

console.log('--');
iterate(-11, function(value, key){
  console.log.apply(console, arguments);
});

console.log('--');
iterate('abc', function(value, key){
  console.log.apply(console, arguments);
});

console.log('--');
iterate([1, 2, 3], function(value, key){
  console.log.apply(console, arguments);
});
