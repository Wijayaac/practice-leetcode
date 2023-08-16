const twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return `true (${nums[map.get(target - nums[i])]} + ${nums[i]})`;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};
console.log(twoSum([1, 3, 8, 2], 10));
