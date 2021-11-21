/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binarySearch = function (nums, target) {
  var l = 0;
  var r = nums.length - 1;
  var mid;
  var ans = -1;
  while (l <= r) {
    mid = Math.ceil(l + (r - l) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
};

module.exports = binarySearch;
