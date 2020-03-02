import {
  getAllEvens,
  getAllIncrementEvens,
  getIntersectionOfcollections,
  getUnionOfcollections
} from "../../src/collection/filter.js";

describe("Filter collection Practice Test", function() {
  it("Get all evens from collection", () => {
    let input = [1, 2, 3, 4, 5];
    let output = getAllEvens(input);
    expect(output).toEqual([2, 4]);
  });

  it("According to the two Numbers given, the interval of even number is obtained", () => {
    let output = getAllIncrementEvens(1, 10);
    expect(output).toEqual([2, 4, 6, 8, 10]);
  });

  it("Gets the intersection of two collections", function() {
    let input1 = [10, 27, 28, 19, 5];
    let input2 = [5, 78, 28, 19, 23];
    let output = getIntersectionOfcollections(input1, input2);
    expect(output).toEqual([28, 19, 5]);
  });

  it("Gets the union of two collections", function() {
    let input1 = [10, 27, 28, 19, 5];
    let input2 = [5, 78, 28, 19, 23];
    let output = getUnionOfcollections(input1, input2);
    expect(output).toEqual([10, 27, 28, 19, 5, 78, 23]);
  });
});
