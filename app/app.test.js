const sortedSquares = require("./problems/sorted-squares");

describe("Beware of a misunderstanding! A sequence of dice rolls", () => {
  var array = [-4, -1, 0, 3, 10];
  const expected = [0, 1, 9, 16, 100];
  it("matches even with an unexpected number 7", () => {
    expect(sortedSquares(array)).toEqual(expect.arrayContaining(expected));
  });
  it("does not match without an expected number 2", () => {
    expect(sortedSquares(expected)).not.toEqual(
      expect.arrayContaining(expected)
    );
  });
});
