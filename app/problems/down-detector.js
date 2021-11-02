const downDetector = (nums, length) => {
  let count = 0;
  let i = 0;
  for (let index = 1; index < length; index++) {
    if (nums[index] == 0) {
      count++;
      if (count == 5) {
        i++;
      }
    } else {
      count = 0;
    }
  }
  return i;
};

module.exports = downDetector;
