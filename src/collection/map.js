function doubleItem(collection) {
  return collection.map((item) => item * 2);
}

function doubleEvenItem(collection) {
  return collection.filter((item) => item % 2 == 0).map((item) => item * 2);
}

function covertToCharArray(collection) {
  return collection.map((item) => String.fromCharCode(item + 96));
}

function getOneClassScoreByASC(collection) {
  return collection
    .filter((student) => student.class == 1)
    .map((item) => item.score)
    .sort((a, b) => a - b);
}

export {
  doubleItem,
  doubleEvenItem,
  covertToCharArray,
  getOneClassScoreByASC,
  countItems
};
