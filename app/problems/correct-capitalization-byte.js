const isCapital = (word) => {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      counter++;
    } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
      counter--;
    }
  }
  if (counter === word.length || counter > 0) {
    return true;
  } else if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
    return true;
  } else if (counter * -1 === word.length) {
    return true;
  }
  return false;
};

console.log(isCapital("coding"));
