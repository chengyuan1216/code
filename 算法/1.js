// 整数反转
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var flag = x < 0 ? -1 : 1
  var result = flag * Number(String(Math.abs(x)).split('').reverse().join(''))
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0
  }
  return result
}

var reverse = function (x) {
  var flag = x < 0 ? -1 : 1
  var result = flag * Number(String(Math.abs(x)).split('').reverse().join(''))
  if (result > 2147483647 || result < -2147483648) {
    return 0
  }
  return result
}

reverse(123)