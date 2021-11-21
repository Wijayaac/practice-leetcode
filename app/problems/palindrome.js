const recursivePalindrome = (string, i) => {
  if (i < string.length / 2) {
    let first = i;
    let last = string.length - i - 1;
    if (string.charAt(first) != string.charAt(last)) {
      return false;
    } else {
      return recursivePalindrome(string, i + 1);
    }
  } else {
    return true;
  }
};
const palindrome = (word) => {
  // classic method compare 2 strings
  //   let temp = "";
  //   for (let index = word.length; index >= 0; index--) {
  //     temp += word.charAt(index);
  //   }
  //   if (temp === word) {
  //     return true;
  //   }
  //   return false;
  //   -------------
  // compare each char of the string divide by 2 , b'cause we just check the half of the string
  //   for (let index = 0; index < word.length / 2; index++) {
  //     let first = index;
  //     let last = word.length - index - 1;
  //     if (word.charAt(first) != word.charAt(last)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // -------
  // using recursive
  return recursivePalindrome(word, 0);
};
palindrome("kodek");
