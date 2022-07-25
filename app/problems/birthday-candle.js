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
export default birthdayCandles;
