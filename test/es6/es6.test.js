import {
  flatArray,
  aggregateArray,
  getEnumerableProperties,
  removeDuplicateItems,
  removeDuplicateChar,
  addItemToSet,
  removeItemToSet,
  countItems
} from "../../src/es6/es6.js";

describe("ES6 New Grammar Test", function() {
  it("Two dimensional array to one dimensional array", function() {
    const input = [1, 2, 3, [4, 5]];
    const output = flatArray(input);
    expect(output).toEqual([1, 2, 3, 4, 5]);
  });

  it("One dimensional array to two dimensional array, double every item", function() {
    const input = [1, 2, 3, 4, 5];
    const output = aggregateArray(input);
    expect(output).toEqual([[2], [4], [6], [8], [10]]);
  });

  it("Get object's enumerable properties", function() {
    const input = {
      name: "zhangsan",
      age: 18,
      sex: "man",
      phone: "181888906754"
    };
    const output = getEnumerableProperties(input);
    expect(output).toEqual(["name", "age", "sex", "phone"]);
  });

  it("Remove duplicate values from the array", function() {
    const input = [1, 2, 3, 4, 4, 4];
    const output = removeDuplicateItems(input);
    expect(output).toEqual([1, 2, 3, 4]);
  });

  it("Remove duplicate chars from the strings", function() {
    const input = "abbbcdddef";
    const output = removeDuplicateChar(input);
    expect(output).toEqual("abcdef");
  });

  it("Add/delete item in set", function() {
    const input = new Set([1, 2, 3]);
    const output = addItemToSet(input, 4);
    expect(output).toEqual(new Set([1, 2, 3, 4]));
    const output2 = removeItemToSet(input, 3);
    expect(output2).toEqual(new Set([1, 2, 4]));
  });

  it("Count every item in array", () => {
    let input = [1, 1, 2, 2, 2, 1, 3, 4, 5, 4, 3, 1, 2];
    let output = countItems(input);
    expect(output).toEqual(
      new Map([
        [1, 4],
        [2, 4],
        [3, 2],
        [4, 2],
        [5, 1]
      ])
    );
  });
});
