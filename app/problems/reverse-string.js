const reverseString = function (s) {
  var left = 0;
  var end = s.length - 1;
  while (left < end) {
    var temp = s[left];
    s[left] = s[end];
    s[end] = temp;

    left++;
    end--;
  }
  return s;
};

module.exports = reverseString;
