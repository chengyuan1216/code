/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var map = {}
  var sum
  var result = []
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j]
      map[sum] = map[sum] || {}
      if (!map[sum][nums[i]] && !map[sum][nums[j]]) {
        map[sum][nums[i]] = [
          [nums[i], nums[j]],
          [i, j]
        ]
      }
      if (map[-nums[j]]) {
        Object.keys(map[-nums[j]]).forEach(key => {
          var flag = true
          result.forEach(item => {
            if (item[0].indexOf(nums[j]) > -1 || item[1].indexOf(j) > -1) {
              flag = false
            }
          })
          if (map[-nums[j]][key][1].indexOf(j) > -1) {
            flag = false
          }
          if (flag) {
            result.push(map[-nums[j]][key].concat([nums[j]]))
          }
        })
      }
    }
  }
  // console.log(map)
  return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))