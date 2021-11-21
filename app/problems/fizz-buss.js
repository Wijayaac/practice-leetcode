const fizzBuzz = function (nums) {
  let newNums = [0];
  for (let i = 1; i <= nums; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      newNums[i] = "fizz buzz";
    } else if (i % 3 == 0) {
      newNums[i] = "fizz";
    } else if (i % 5 == 0) {
      newNums[i] = "buzz";
    } else {
      newNums[i] = i;
    }
  }
  return newNums;
};

module.exports = fizzBuzz;
