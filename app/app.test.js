const binarySearch = require("../app/problems/binary-search");
var array = [-1, 0, 3, 5, 9, 12];
var target = 9;
var target2 = 2;
describe("Test binary search", () => {
  test("it should return index if exist", () => {
    expect(binarySearch(array, target)).toBe(4);
  });
  test("it should return -1 , number not exists", () => {
    expect(binarySearch(array, target2)).toBe(-1);
  });
});
