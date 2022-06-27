const fibonaci = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};

const fibonaciRec = (n) => {
  if (n < 2) return n;
  return fibonaciRec(n - 1) + fibonaciRec(n - 2);
};

module.exports = {
  fibonaci,
  fibonaciRec,
};
