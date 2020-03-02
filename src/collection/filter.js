function getAllEvens(collection) {
  return collection.filter((item) => item % 2 == 0);
}

function getAllIncrementEvens(start, end) {
  const origin = Array.from(new Array(end + 1).keys()).slice(start);
  return getAllEvens(origin);
}

function getIntersectionOfcollections(collection1, collection2) {
  return collection1.filter((item) => collection2.includes(item));
}

function getUnionOfcollections(collection1, collection2) {
  return collection1.concat(
    collection2.filter((item) => !collection1.includes(item))
  );
}

function countItems(collection) {
  let count = {};
  new Set(collection).forEach((item) => {
    count[item] = collection.filter((ele) => ele == item).length;
  });
  return count;
}

export {
  getAllEvens,
  getAllIncrementEvens,
  getIntersectionOfcollections,
  getUnionOfcollections,
  countItems
};
