const jewelsAndStones = (jewels, stones) => {
  let counter = 0;
  if (jewels.length > stones.length) {
    for (let i = 0; i < jewels.length; i++) {
      for (let j = 0; j < stones.length; j++) {
        if (jewels[i] === stones[j]) {
          counter++;
        }
      }
    }
  } else {
    for (let i = 0; i < stones.length; i++) {
      for (let j = 0; j < jewels.length; j++) {
        if (stones[i] === jewels[j]) {
          counter++;
        }
      }
    }
  }
  return counter;
};
var jewels = "AYOPD",
  stones = "ayopd";

console.log(jewelsAndStones(jewels, stones));
