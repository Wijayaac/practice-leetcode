const reverseStringTwo = (s) => {
  let str = s.split(" ");
  let finalResult = "";
  for (let index = 0; index < str.length; index++) {
    let result = "";
    for (let j = 0; j < str[index].length; j++) {
      result += str[index].charAt(str[index].length - j - 1);
    }
    result += " ";
    finalResult += result;
  }
  return finalResult.trim();
};

module.exports = reverseStringTwo;
