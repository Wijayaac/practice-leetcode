const plusMinusFraction = (arr) => {
  let pos = 0,
    neg = 0,
    zero = 0,
    length = arr.length;

  arr.forEach((a) => {
    if (a > 0) {
      pos++;
    } else if (a < 0) {
      neg++;
    } else {
      zero++;
    }
  });
  console.log((pos / length).toFixed(6));
  console.log((neg / length).toFixed(6));
  console.log((zero / length).toFixed(6));
};
