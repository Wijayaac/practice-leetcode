const diagonalDifference = (arr) => {
  // Write your code here
  let diag1 = 0,
    diag2 = 0;
  const len = arr.length;
  arr.forEach((ele, ind, arr) => {
    diag1 += ele[ind];
    diag2 += ele[len - 1 - ind];
  });
  return Math.abs(diag1 - diag2);
};
module.exports = diagonalDifference;
