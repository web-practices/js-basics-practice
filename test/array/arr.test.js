import {
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
} from "../../src/array/arr.js";

describe("Array Practice Test", function() {
  it("Join arrays", () => {
    let input1 = ["Cecilie", "Lone"];
    let input2 = ["Emil", "Tobias", "Linus"];
    let output = joinArrays(input1, input2);
    expect(output).toEqual(["Cecilie", "Lone", "Emil", "Tobias", "Linus"]);
  });

  it("Check if all the values in the ages array are 18 or over", () => {
    let input1 = [32, 33, 16, 40];
    let output = checkAdult(input1, 18);
    expect(output).toBe(false);
  });

  it("Get the value of the first element in an array that meet the conditions", () => {
    let input1 = [10, 33, 16, 40];
    let output = findAdult(input1, 18);
    expect(output).toBe(33);
  });

  it("Convert the elements of an array into a string", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = convertArrToStr(input1, "-");
    expect(output).toBe("Banana-Orange-Apple-Mango");
  });

  it("Remove the last element of an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = removeLastEle(input1);
    expect(output).toEqual(["Banana", "Orange", "Apple"]);
  });

  it("Add a new item to an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = addNewItem(input1, "Kiwi");
    expect(output).toEqual(["Banana", "Orange", "Apple", "Mango", "Kiwi"]);
  });

  it("Remove the first item of an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = removeFirstItem(input1);
    expect(output).toEqual(["Orange", "Apple", "Mango"]);
  });

  it("Add new items to the beginning of an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = addNewItemToBeginArr(input1, "Kiwi");
    expect(output).toEqual(["Kiwi", "Banana", "Orange", "Apple", "Mango"]);
  });

  it("Reverse the order of the elements in an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = reverseOrder(input1);
    expect(output).toEqual(["Mango", "Apple", "Orange", "Banana"]);
  });

  it("Select elements from an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
    let output = selectElements(input1, 1, 3);
    expect(output).toEqual(["Orange", "Apple"]);
  });

  it("Adds/removes items to/from an array", () => {
    let input1 = ["Banana", "Orange", "Apple", "Mango"];
    let output = addItemsToArray(input1, 1, 0, "Lemon");
    expect(output).toEqual(["Banana", "Lemon", "Orange", "Apple", "Mango"]);
  });

  it("Sort array by ascending", () => {
    let input1 = [1, 5, 3, 88, 9, 10, 66];
    let output = sortASC(input1);
    expect(output).toEqual([1, 3, 5, 9, 10, 66, 88]);
  });

  it("Sort array by descending", () => {
    let input1 = [1, 5, 3, 88, 9, 10, 66];
    let output = sortDESC(input1);
    expect(output).toEqual([88, 66, 10, 9, 5, 3, 1]);
  });
});
