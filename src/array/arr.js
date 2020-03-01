function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function checkAdult(arr, age) {
  return arr.every((age) => age >= 18);
}

function findAdult(arr, age) {
  return arr.find((age) => age >= 18);
}

function convertArrToStr(arr, str) {
  return arr.join(str);
}

function removeLastEle(arr) {
  arr.pop();
  return arr;
}

function addNewItem(arr, item) {
  arr.push(item);
  return arr;
}

function removeFirstItem(arr) {
  arr.shift();
  return arr;
}

function addNewItemToBeginArr(arr, item) {
  arr.unshift(item);
  return arr;
}

function reverseOrder(arr) {
  return arr.reverse();
}

function selectElements(arr, start, end) {
  return arr.slice(start, end);
}

function addItemsToArray(arr, index, howmany, item) {
  arr.splice(index, howmany, item);
  return arr;
}

function sortASC(arr) {
  return arr.sort((a, b) => a - b);
}

function sortDESC(arr) {
  return arr.sort((a, b) => b - a);
}

export {
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
};
