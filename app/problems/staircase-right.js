const staircase = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        string += ` `;
      } else {
        string += `#`;
      }
    }
    if (i < n) {
      string += "\n";
    }
  }
  console.log(string);
};

module.exports = staircase;
