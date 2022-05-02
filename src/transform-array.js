const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  const transformed = [];
  let controlSequence = '';

  arr.forEach((item, index) => {
    if (item === '--double-next') {
      controlSequence = item;
    } else if (item === '--discard-prev') {
      controlSequence = item;
    } else {
      if (controlSequence === '--double-next') {
        transformed.push(item, item);
        controlSequence = '';
      } else if (controlSequence === '--discard-prev') {
        transformed.push(item);
        controlSequence = '';
      } else {
        transformed.push(item);
      }
    }
  });

  return transformed;
}

module.exports = {
  transform
};
