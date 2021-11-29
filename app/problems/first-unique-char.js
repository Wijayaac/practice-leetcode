const firstUniqChar = (string) => {
  let map = {};

  for (let i = 0; i < string.length; i++) {
    if (!map[string[i]]) {
      map[string[i]] = true;
    } else {
      map[string[i]] = false;
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]] == true) {
      return i;
    }
  }
  return -1;
};
