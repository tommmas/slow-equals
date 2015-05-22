'use strict';

/**
 * Slow compare two strings
 *
 * @param {String} a
 * @param {String} b
 * @return {Boolean}
 */
function slowEquals(a, b) {
  var diff = a.length ^ b.length;
  for(var i = 0; i < a.length && i < b.length; i++){
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

module.exports = slowEquals;