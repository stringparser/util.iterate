'use strict';

var has = Object.prototype.hasOwnProperty;
var util = require('./lib/util');

exports = module.exports = iterate;

function iterate(input, callback, opt){
  input = util.makeIterable(input);
  if(!input || typeof callback !== 'function'){
    return false;
  }

  opt = opt || false;
  if(callback.length > 2){
    opt.input = input;
  }

  (function next(obj){
    var key, value, filter;
    for(key in obj){
      if(!has.call(obj, key)){ continue; }

      value = obj[key];
      filter = callback(key, value, opt);

      if(opt.break){ return; } else if(filter){ continue; }
      if(opt.deep && util.isObject(value)){
        next(value);
      }
    }
  })(input);

  return opt && opt.output || false;
}
