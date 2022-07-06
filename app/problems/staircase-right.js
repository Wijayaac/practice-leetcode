const staircase = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      string += ` `;
    }
    for (let k = 1; k <= i; k++) {
      string += `#`;
    }
    if (i !== n) {
      string += "\n";
    }
  }
  console.log(string);
};

module.exports = staircase;
