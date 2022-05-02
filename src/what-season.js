const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date || date == undefined) {
    return 'Unable to determine the time of year!';
  } 
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let month = (date.getMonth() +1).toString();

  let seasons = '';
  switch (month) {
    case '12':
    case '1':
    case '2':
      seasons = 'winter';
      break;
    case '3':
    case '4':
    case '5':
      seasons = 'spring';
      break;
    case '6':
    case '7':
    case '8':
      seasons = 'summer';
      break;
    case '9':
    case '10':
    case '11':
      seasons = 'fall';
      break;
  }
  return seasons;
}

module.exports = {
  getSeason,
};
