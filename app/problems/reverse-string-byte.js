// Reverse string by Daily Byte
// input : String
// output : String

const reverseString = (s) => {
  let temp = [];
  for (let i = s.length - 1; i >= 0; i--) {
    temp += s[i];
  }
  return temp;
};

// Test cases
// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”
// Ex. reverseString("Cat")
