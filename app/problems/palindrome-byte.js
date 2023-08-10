const validPalindrome = (word) => {
  let temp = "";
  const cleanInput = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let index = cleanInput.length; index >= 0; index--) {
    temp += cleanInput.charAt(index);
  }
  if (temp === cleanInput) {
    return true;
  }
  return false;
};

const testCases = ["A man, a plan, a canal: Panama.", "race a car", "Was it a car or a cat I saw?"];

testCases.forEach((word) => {
  console.log(`palindrome : ${validPalindrome(word)}`);
});
