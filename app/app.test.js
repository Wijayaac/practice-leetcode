const searchInsert = require("./problems/search-insert-position");

var array = [1, 3, 5, 7, 9];
var target = 8;
var target2 = 3;
test("search index of number inside array", () => {
  expect(searchInsert(array, target)).toBe(4);
  expect(searchInsert(array, target2)).toBe(1);
});
