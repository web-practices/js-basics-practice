import {
  upwardNumber,
  downwardNumber,
  roundNumber,
  random,
  maxNumber,
  minNumber
} from "../../src/math/math.js";

describe("Math Practice Test", function() {
  it("Round a number upward to its nearest integer", () => {
    let output = upwardNumber(1.4);
    expect(output).toBe(2);
  });

  it("Round a number downward to its nearest integer:", () => {
    let output = downwardNumber(1.8);
    expect(output).toBe(1);
  });

  it("Round a number to its nearest integer:", () => {
    let output1 = roundNumber(1.5);
    let output2 = roundNumber(1.4);
    expect(output1).toBe(2);
    expect(output2).toBe(1);
  });

  it("Return a random number between 0 (inclusive) and 100 (exclusive):", () => {
    let output = random(0, 100);
    expect(output).toBeLessThan(100);
    expect(output).toBeGreaterThanOrEqual(0);
  });

  it("Return the number with the highest value", () => {
    let output = maxNumber([0, 6, 9, 12, 3, 55, 8]);
    expect(output).toBe(55);
  });

  it("Return the number with the lowest value", () => {
    let output = minNumber([0, 6, 9, 12, 3, 55, 8]);
    expect(output).toBe(0);
  });
});
