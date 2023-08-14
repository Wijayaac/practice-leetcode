const longestPrefix = (words) => {
  if (words.length === 0) {
    return "";
  }
  let commonPrefix = "";

  for (let i = 0; i < words[0].length; i++) {
    const char = words[0][i];

    for (let j = 1; j < words.length; j++) {
      if (i >= words[j].length || words[j][i] !== char) {
        return commonPrefix;
      }
    }
    commonPrefix += char;
  }
  return commonPrefix;
};

console.log(longestPrefix(["colorado", "color", "cold"]));
