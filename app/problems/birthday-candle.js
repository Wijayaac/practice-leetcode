/**
 * @params candles = [] int
 */

const birthdayCandles = (candles) => {
  let n = candles.length,
    tallest = Math.max.apply(0, candles),
    count = 0;

  for (let i = 0; i < n; i++) {
    if (candles[i] == tallest) {
      count++;
    }
  }
  return count;
};

candles = [3, 2, 1, 3];
console.log(birthdayCandles(candles));
