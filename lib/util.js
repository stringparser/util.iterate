'use strict';

exports = module.exports = {};

// dependencies
//
exports.isObject = require('lodash.isobject');

// assorted
//
exports.makeIterable = function makeIterable(input){
  // NaN, '', undefined, null, 0 and Infinity
  if(!input || input === Infinity){
    return false;
  }

  switch(typeof input){
    case 'function':
      return false;
    case 'string':
      return input.split('');
    case 'object':
      return input;
    case 'number':
      var end = input > 0 && input || 0;
      var start = input < 0 && input || 0;
      var iterable = [];
      for(var index = start; index < end; ++index){
        iterable.push(index);
      }
      return iterable;
    default:
      return false;
  }
};
