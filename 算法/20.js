/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   if (!s) return true
//   var arr = []
//   var i = 0
//   var map = {
//     '(': -1,
//     ')': 1,
//     '{': -2,
//     '}': 2,
//     '[': -3,
//     ']': 3
//   }
//   while (i < s.length) {
//     if (arr.length && map[arr[arr.length - 1]] + map[s[i]] === 0) {
//       arr.pop()
//     } else {
//       arr.push(s[i])
//     }
//     i++
//   }
//   if (arr.length) return false
//   return true
// };


var isValid = function (s) {
  var len = s.length
  do {
    s = s.replace(/(\(\)|\[\]|\{\})/g, '')
  }
  while (len != s.length && (len = s.length))
  return !len
};

isValid('{[]}')

给出 n 代表生成括号的对数， 请你写出一个函数， 使其能够生成所有可能的并且有效的括号组合。

例如， 给出 n = 3， 生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源： 力扣（ LeetCode）
链接： https: //leetcode-cn.com/problems/generate-parentheses
  著作权归领扣网络所有。 商业转载请联系官方授权， 非商业转载请注明出处。