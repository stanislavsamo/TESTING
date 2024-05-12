import controlCard from "../check.js";

test.each([
  [4235694516466306, true],
  [9876543210987654, false],
])("Testing Luhn algorithm with %i number", (number, expected) => {
  const arr = number.toString().split("").map(Number);
  const result = controlCard(arr);
  expect(result).toEqual(expected);
});
