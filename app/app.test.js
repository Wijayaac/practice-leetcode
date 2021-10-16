const fizzBuzz = require("./problems/fizz-buss");

describe("Test fizz buzz coding challenge", () => {
  test("should return 1", () => {
    let expected = [0, 1];
    expect(fizzBuzz(1)).toEqual(expect.arrayContaining(expected));
  });
  test("should return fizz", () => {
    let expected = [0, "fizz"];
    expect(fizzBuzz(3)).toEqual(expect.arrayContaining(expected));
  });
  test("should return buzz", () => {
    let expected = [0, "fizz", "buzz"];
    expect(fizzBuzz(5)).toEqual(expect.arrayContaining(expected));
  });
  test("should not return fizz buzz", () => {
    let expected = [0, "fizz", "buzz", "fizz buzz"];
    expect(fizzBuzz(5)).not.toEqual(expect.arrayContaining(expected));
  });
  test("should return fizz buzz", () => {
    let expected = [0, "fizz", "buzz", "fizz buzz"];
    expect(fizzBuzz(15)).toEqual(expect.arrayContaining(expected));
  });
});
