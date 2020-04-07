/*
给出 n 代表生成括号的对数， 请你写出一个函数， 使其能够生成所有可能的并且有效的括号组合。
例如， 给出 n = 3， 生成结果为：
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  debugger
  if (n == 0) return []
  if (n == 1) return ['()']
  var arr
  var list = [
    ['(', ')']
  ]
  var tempList
  while (--n) {
    arr = []
    tempList = list
    list = []
    tempList.forEach(item => {
      item.forEach((_, i) => {
        var tempItem = item.slice()
        tempItem.splice(i, 0, '(', ')')
        var s = tempItem.join('')
        if (arr.indexOf(s) < 0) {
          arr.push(s)
          list.push(tempItem)
        }
      })
    })
  }

  return arr
};

console.log(generateParenthesis(3))