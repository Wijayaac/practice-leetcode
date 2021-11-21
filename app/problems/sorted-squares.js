/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  var length = nums.length;
  var newElement = [];
  //   loop over the array and square it
  for (let index = 0; index < length; index++) {
    const element = nums[index];
    newElement[index] = Math.pow(element, 2);
  }
  //   sort by value asc
  return newElement.sort((a, b) => a - b);
};

module.exports = sortedSquares;
