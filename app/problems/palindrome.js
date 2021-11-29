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

// improvement with removing symbols (",",":") etc
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (input) {
  var start = 0;
  var end = input.length - 1;
  while (start < end) {
    var s = input.charCodeAt(start);
    var e = input.charCodeAt(end);

    if (!isLetter(s)) {
      start++;
      continue;
    }
    if (!isLetter(e)) {
      end--;
      continue;
    }
    if (toLowerCase(s) !== toLowerCase(e)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

var isLetter = function (code) {
  if (
    (code >= 48 && code <= 57) || // numbers
    (code >= 65 && code <= 90) || // uppercase
    (code >= 97 && code <= 122)
  ) {
    // lowercase
    return true;
  } else {
    return false;
  }
};
var toLowerCase = function (code) {
  if (code >= 65 && code <= 90) {
    return code + 32;
  } else {
    return code;
  }
};
