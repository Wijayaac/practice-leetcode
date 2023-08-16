function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try deleting either left or right character
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true; // It's a palindrome
}

console.log(validPalindrome("abcba")); // true
console.log(validPalindrome("foobof")); // true
console.log(validPalindrome("abccab")); // false
