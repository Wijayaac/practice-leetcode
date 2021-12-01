/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  let seen = new Map();

  for (let num = 0; num < nums.length; num++) {
    if (seen.has(nums[num])) return true;

    seen.set(nums[num]);
  }
  return false;
};
