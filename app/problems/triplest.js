// Compare triplets from Hackerrank
function compareTriplets(a, b) {
  let score = [0, 0];
  let aliceScore = 1,
    bobScore = 1;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      score[0] = aliceScore++;
    } else if (a[i] < b[i]) {
      score[1] = bobScore++;
    }
  }
  return score;
}

module.exports = compareTriplets;
