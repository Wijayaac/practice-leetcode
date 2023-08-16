const jewelsAndStones = (jewels, stones) => {
  const jewelSet = new Set(jewels);
  let counter = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      counter++;
    }
  }
  return counter;
};
var jewels = "abc",
  stones = "ac";

console.log(jewelsAndStones(jewels, stones));
