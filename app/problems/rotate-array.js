// JavaScript implementation of right rotation
// of an array K number of times

const rightRotate = (nums, k) => {
  var n = nums.length;

  //  base case :invalid input
  k = k % n;

  var aux = [k];
  for (let index = 0; index < k; index++) {
    aux[index] = nums[n - k + index];
  }
  for (let index = n - k - 1; index >= 0; index--) {
    nums[index + k] = nums[index];
  }
  for (let index = 0; index < k; index++) {
    nums[index] = aux[index];
  }
};

module.exports = rightRotate;
