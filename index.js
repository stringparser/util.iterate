'use strict';

var util = require('./lib/util');

exports = module.exports = iterate;

function iterate(input, callback, opt){
  input = util.makeIterable(input);
  if(!input || typeof callback !== 'function'){
    return false;
  }

  if(callback.length > 2){
    opt = opt || {};
    opt.input = input;
  }

  var key, value;
  (function next(obj){
    for(key in obj){
      value = obj[key];
      if(!callback(key, value, opt)){ continue; }
      if(opt && opt.deep && util.isObject(value)){
        next(value);
      }
    }
  })(input);

  return opt && opt.output || false;
}
