/**
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

输入: [1,8,6,2,5,4,8,3,7]
输出: 49
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var max = 0
  for (var i = 0; i < height.length - 1; i++) {
    for (var j = i + 1; j < height.length; j++) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
    }
  }
  return max
};

// 双指针法
var maxArea = function (height) {
  let max = 0
  let start = 0
  let end = height.length - 1
  while (start !== end) {
    if (height[start] > height[end]) {
      let a = height[end] * Math.abs(end - start)
      if (a > max) {
        max = a
      }
      /**
       *  为什么要右边的指针左移，而不是左边的指针右移？
       *  首先可以确定的是不管是左移还是右移横坐标的差值是一样的
       *  但是移动左指针时, 面积时一定不会大于当前的max的值的, 移动右指针可能会出现更大的值
       */
      end--
    } else {
      let b = height[start] * Math.abs(end - start)
      if (b > max) {
        max = b
      }
      start++
    }
  }
  return max
};