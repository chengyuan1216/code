/**
 * @param {string} str
 * @return {number}
 */
// 字符串转数字
var myAtoi = function (str) {
  var max, min, number = parseInt(str)
  if (isNaN(number)) {
    return 0
  }
  max = Math.pow(2, 31) - 1
  min = -Math.pow(2, 31)
  if (number >= max) {
    return max
  }
  if (number <= min) {
    return min
  }
  return number
};