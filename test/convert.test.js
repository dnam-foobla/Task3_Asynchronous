const { convert } = require("../algorithms");

test(`Input: ''`, () => {
  expect(convert("")).toBe("");
});
test(`Input: 'abc'`, () => {
  expect(convert("abc")).toBe("");
});
test(`Input: 'a1b2c3'`, () => {
  expect(convert("a1b2c3")).toBe("123");
});
test(`Input: '123'`, () => {
  expect(convert("123")).toBe("123");
});
