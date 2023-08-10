const isMoveToOrigin = (direction) => {
  const length = direction.length;
  const cleanInput = direction.toLowerCase().replace(/[^a-z0-9]g/, "");
  const weight = {
    r: 1,
    l: -1,
    u: 1,
    d: -1,
  };
  let total = 0;

  for (const move of cleanInput) {
    total += weight[move];
  }
  return total === 0;
};

console.log(isMoveToOrigin("RUULLDRD"));
