function getMaxNumber(collction) {
  return collction.reduce((a, b) => (a > b ? a : b));
}

function isSameCollection(collction1, collction2) {
  if (collction1.length != collction2.length) {
    return false;
  }

  return collction1.reduce(
    (result, curr, index) => (result ? curr === collction2[index] : false),
    true
  );
}

function sum(collction) {
  return collction.reduce((sum, curr) => sum + curr);
}

function computeAverage(collction) {
  return collction.reduce((result, curr) => result + curr) / collction.length;
}

function lastEven(collction) {
  let even = collction.reduce((even, curr) => (curr % 2 == 0 ? curr : even));
  return even % 2 != 0 ? null : even;
}

export { getMaxNumber, isSameCollection, computeAverage, sum, lastEven };
