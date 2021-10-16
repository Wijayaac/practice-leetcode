const twoSum = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] + nums[end] > target) end--;
    else if (nums[start] + nums[end] < target) start++;
    else return [++start, ++end];
  }
  return [];
};

module.exports = twoSum;
