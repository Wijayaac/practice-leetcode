/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]--;
      if (map[t[i]] == 0) delete map[t[i]];
    } else return false;
  }
  return false;
};

function anagram(s, t) {
  const count = {};
  for (let char of s) {
    if (!count[char]) {
      count[char] = 0;
    }
    count[char]++;
  }

  for (let char of t) {
    if (count[char] === undefined) {
      return false;
    } else {
      count[char]--;
    }
  }

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
}
let s = "anagram",
  t = "nagaram";
console.log(anagram(s, t));
