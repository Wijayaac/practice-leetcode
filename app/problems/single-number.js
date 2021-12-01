/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) =>
  nums.reduce((a, b) => {
    return a ^ b;
  });
