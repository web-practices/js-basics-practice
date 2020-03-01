function upwardNumber(num) {
  return Math.ceil(num);
}

function downwardNumber(num) {
  return Math.floor(num);
}

function roundNumber(num) {
  return Math.round(num);
}

function random(startNum, endNum) {
  return Math.round(Math.random() * (endNum - startNum));
}

function minNumber(arr) {
  return Math.min(...arr);
}

function maxNumber(arr) {
  return Math.max(...arr);
}

export {
  upwardNumber,
  downwardNumber,
  roundNumber,
  random,
  maxNumber,
  minNumber
};
