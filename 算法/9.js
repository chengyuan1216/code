// 回文数
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var str = String(x)
  for (var i = 0, len = str.length / 2; i < len; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false
    }
  }
  return true
};


var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  var a = []
  while (x >= 10) {
    a.push(x % 10)
    x = parseInt(x / 10)
  }
  a.push(x)
  for (var i = 0, len = a.length / 2; i < len; i++) {
    if (a[i] != a[a.length - 1 - i]) {
      return false
    }
  }
  return true
};