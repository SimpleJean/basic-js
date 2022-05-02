const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  if (!Array.isArray(domains)) return false;

  const dnsStats = {};

  domains.forEach((domain) => {
    const domainParts = domain.split('.');
    let domainPart = '';

    for (let i = domainParts.length - 1; i >= 0; i--) {
      domainPart = domainParts[i] + (domainPart ? '.' + domainPart : '');
      dnsStats[domainPart] = dnsStats[domainPart] ? dnsStats[domainPart] + 1 : 1;
    }
  });

  return dnsStats;
}

module.exports = {
  getDNSStats,
};
