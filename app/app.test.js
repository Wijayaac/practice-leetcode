const reverseString = require("./problems/reverse-string");

describe("Test reverse string leetcode practice", () => {
  let theString = ["h", "e", "l", "l", "o"];
  let expected = ["o", "l", "l", "e", "h"];
  test("it should return reversed string", () => {
    expect(reverseString(theString)).toEqual(expected);
  });
});
