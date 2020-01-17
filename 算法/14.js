/*
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
输入: ["flower","flow","flight"]
输出: "fl"
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return ''
  if (strs.length == 1) return strs[0]
  if (strs[0].length == 0) return ''
  var i = 0
  var str = strs[0]
  strs = strs.slice(1)
  while (i < str.length) {
    for (item of strs) {
      if (item[i] !== str[i]) {
        return str.substring(0, i) || ''
      }
    }
    i++
  }
  return str
};
console.log(longestCommonPrefix(["c", "c"]))