const factorial = require("../src");

describe("factorial function", () => {
  it("should return 1 for 0", () => {
    expect(factorial(3)).toEqual(6);
  });
  it("throws an error if a negative input is provided", () => {
    expect(() => {
      factorial(-1);
    }).toThrow("Input must be a positive integer");
  });
});
