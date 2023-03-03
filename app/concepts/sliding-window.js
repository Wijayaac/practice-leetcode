// find averages of sub arrays

// @input array, k (sub array length)

function findAverageSubArray(arr, n) {
  // brute force
  const result = [];

  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;

    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }
    result.push(sum / n);
  }
  return result;
}
function findSubArrayOptimized(arr, n) {
  // sliding window concept
  const results = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element
    windowSum += arr[windowEnd];
    // slide the window forward
    // we do not need to slide if we have not hit the required window size of k
    if (windowEnd >= n - 1) {
      // we are **AUTOmatically** returning the window average once we hit the window size of k
      // and pushing to the output array
      results.push(windowSum / n);

      // subtracting the element going out
      windowSum -= arr[windowStart];

      // then sliding the window forward
      windowStart++;

      // adding the element coming in, in the outer/previous logo
      // and repeating this process until we hit the end of the array
    }
  }
  return results;
}

const arrays = [1, 3, 2, 6, -1, 4, 1, 8, 2];
console.log(findSubArrayOptimized(arrays, 5));
