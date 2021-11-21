// A JavaScript functions to move all zeroes at the end of array
// functions which pushes all zeros to end of an array
const pushZerosToEnd = (arr) => {
  let count = 0; // Count of non-zero elements

  // Traverse the array. If element encountered is non-zero,
  // then replace the element at index 'coun'
  // with this element
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] != 0) {
      arr[count++] = arr[index]; //here count is incremented
    }
  }
  while (count < arr.length) {
    arr[count++] = 0;
  }
};

module.exports = pushZerosToEnd;
