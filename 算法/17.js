/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  debugger
  var map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  var res = []
  var temp = []
  digits = String(digits)

  for (var i = 0; i < digits.length; i++) {
    if (i == 0) {
      res = temp = map[digits[i]]
    } else {
      res = []
      temp.forEach(item => {
        map[digits[i]].forEach(item1 => {
          res.push(item + item1)
        })
      })
      temp = res
    }
  }

  return res
}

letterCombinations(23)