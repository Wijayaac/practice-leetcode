const reverseStringTwo = require("./problems/reverse-string-ii");

describe("Test reverse string leetcode practice", () => {
  let theString = "Let's take LeetCode contest";
  let expected = "s'teL ekat edoCteeL tsetnoc";
  test("it should return reversed string", () => {
    expect(reverseStringTwo(theString)).toEqual(expected);
  });
});
