const {
  joinArrays,
  checkAdult,
  findAdult,
  convertArrToStr,
  removeLastEle,
  addNewItem,
  removeFirstItem,
  addNewItemToBeginArr,
  reverseOrder,
  selectElements,
  addItemsToArray,
  sortASC,
  sortDESC
} = require("../../src/array/arr.js");

describe("Array Practice Test", function() {
  it("Join arrays", () => {
    let input1 = ["Cecilie", "Lone"];
    let input2 = ["Emil", "Tobias", "Linus"];
    let output = joinArrays(input1, input2);
    expect(["Cecilie", "Lone", "Emil", "Tobias", "Linus"]).toEqual(output);
  });

  it("Check if all the values in the ages array are 18 or over", () => {
    let input1 = [32, 33, 16, 40];
    let output = checkAdult(input1, 18);
    expect(false).toEqual(output);
  });

  it("Get the value of the first element in an array that meet the conditions", () => {
    let input1 = [10, 33, 16, 40];
    let output = findAdult(input1, 18);
    expect(33).toEqual(output);
  });

  it("Convert the elements of an array into a string", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = convertArrToStr(input1, "-");
    expect("Banana-Orange-Apple-Mango").toEqual(output);
  });

  it("Remove the last element of an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = removeLastEle(input1);
    expect(["Banana", "Orange", "Apple"]).toEqual(output);
  });

  it("Add a new item to an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = addNewItem(input1, "Kiwi");
    expect(["Banana", "Orange", "Apple", "Mango", "Kiwi"]).toEqual(output);
  });

  it("Remove the first item of an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = removeFirstItem(input1);
    expect(["Orange", "Apple", "Mango"]).toEqual(output);
  });

  it("Add new items to the beginning of an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = addNewItemToBeginArr(input1, "Kiwi");
    expect(["Kiwi", "Banana", "Orange", "Apple", "Mango"]).toEqual(output);
  });

  it("Reverse the order of the elements in an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = reverseOrder(input1);
    expect(["Mango", "Apple", "Orange", "Banana"]).toEqual(output);
  });

  it("Select elements from an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
    let output = selectElements(input1, 1, 3);
    expect(["Orange", "Apple"]).toEqual(output);
  });

  it("Adds/removes items to/from an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = addItemsToArray(input1, 1, 0, "Lemon");
    expect(["Banana", "Lemon", "Orange", "Apple", "Mango"]).toEqual(output);
  });

  it("Sort array by ascending", () => {
    let input1 = [1, 5, 3, 88, 9, 10, 66];
    let output = sortASC(input1);
    expect([1, 3, 5, 9, 10, 66, 88]).toEqual(output);
  });

  it("Sort array by descending", () => {
    let input1 = [1, 5, 3, 88, 9, 10, 66];
    let output = sortDESC(input1);
    expect([88, 66, 10, 9, 5, 3, 1]).toEqual(output);
  });
});
