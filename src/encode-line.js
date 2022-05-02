const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }

  let result = [];
  let counter = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter = 1;
      for (let o = i + 1; o < str.length; o++) {
        if (str[i] === str[o]) {
          counter++;
        }
      }
      result.push(`${counter}${str[i]}`);
      counter--;
    } else {
      result.push(str[i]);
    }
    i = i + +counter;
  }
  return result.join('');
}

module.exports = {
  encodeLine,
};
