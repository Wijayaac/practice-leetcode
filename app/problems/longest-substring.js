const lengthOfLongestSubstring = (str) => {
  var n = str.length;

  // Result
  var res = 0;

  for (var i = 0; i < n; i++) {
    // Note : Default values in visited are false
    var visited = [26];

    for (var j = i; j < n; j++) {
      // If current character is visited
      // Break the loop
      if (visited[str.charAt(j)] == true) break;
      // Else update the result if
      // this window is larger, and mark
      // current character as visited.
      else {
        res = Math.max(res, j - i + 1);
        visited[str.charAt(j)] = true;
      }
    }

    // Remove the first character of previous
    // window
    visited[str.charAt(i)] = false;
  }
  return res;
};
