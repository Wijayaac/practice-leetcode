const miniMaxSum = (arr) => {
  let min = Math.min(...arr),
    max = Math.max(...arr);
  let sum = arr.reduce((prev, curr) => prev + curr);
  console.log(min, max, sum);
  return { min: sum - max, max: sum - min };
};
let a = [1, 3, 5, 7, 9];
console.log(miniMaxSum(a));

const mostActive = (custs) => {
  // Write your code here
  let length = custs.length;
  let sortedCustomers = custs.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    // console.log((prev[cur] || 0) + 1);
    if (prev > Math.ceil((length * 5) / 100)) {
      return prev;
    }
  }, {});

  //   console.log(sortedCustomers, (length * 5) / 100);

  let ordering = [];

  for (const i in sortedCustomers) {
    ordering.push(i);
  }
  return ordering.sort();
};

let customers = ["omega", "alpha", "beta", "alpha", "omega"];

console.log(mostActive(customers));
