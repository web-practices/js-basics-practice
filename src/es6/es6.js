function flatArray(arr) {
  return arr.flat();
}

function aggregateArray(arr) {
  return arr.flatMap((item) => [[item * 2]]);
}

function getEnumerableProperties(obj) {
  return Object.keys(obj);
}

function removeDuplicateItems(arr) {
  return [...new Set(arr)];
}

function removeDuplicateChar(str) {
  return [...new Set(str)].join("");
}

function addItemToSet(set, item) {
  return set.add(item);
}

function removeItemToSet(set, item) {
  set.delete(item);
  return set;
}

function countItems(arr) {
  let map = new Map();
  new Set(arr).forEach((item) => {
    let size = arr.filter((ele) => ele === item).length;
    map.set(item, size);
  });
  return map;
}

export {
  flatArray,
  aggregateArray,
  getEnumerableProperties,
  removeDuplicateItems,
  removeDuplicateChar,
  addItemToSet,
  removeItemToSet,
  countItems
};
