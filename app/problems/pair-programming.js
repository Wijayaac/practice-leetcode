const pairProgramming = (arr1, arr2) => {
  let index1 = [];
  let index2 = [];
  let char1 = [];
  let char2 = [];
  let newArray = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      index1[i] = arr1[i];
      index2[i] = arr2[i];
    }
    if (i % 2 === 1) {
      char1[i] = arr1[i];
      char2[i] = arr2[i];
    }
  }
  let index3 = index1
    .filter((n) => n)
    .map((i) => Number(i))
    .concat(index2.filter((n) => n).map((i) => Number(i)));

  let char3 = char1.filter((n) => n).concat(char2.filter((n) => n));

  index3.forEach((order, index) => {
    let finishObject = {
      id: order,
      letter: char3[index],
    };
    newArray.push(finishObject);
  });

  newArray.sort((a, b) => (a.id > b.id ? 1 : -1));

  let recoveredCode = "";

  newArray.map(({ letter }) => (recoveredCode += letter));

  return recoveredCode;
};

module.exports = pairProgramming;
