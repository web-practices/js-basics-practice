function getCharByIndex(str, index) {
  return str.charAt(index);
}

function joinStrings(first, second) {
  return first.concat(second);
}

function isInclude(originStr, specificStr) {
  return originStr.includes(specificStr);
}

function getIndexOfStr(originStr, str) {
  return originStr.indexOf(str);
}

function replaceStr(originStr, str, newValue) {
  return originStr.replace(str, newValue);
}

function extractStr(originStr, firstIndex, endIndex) {
  return originStr.slice(firstIndex, endIndex);
}

function splitStr(originStr, str) {
  return originStr.split(str);
}

function lowercase(str) {
  return str.toLowerCase();
}

function uppercase(str) {
  return str.toUpperCase();
}

function removeSpace(str) {
  return str.trim();
}

module.exports = {
  getCharByIndex,
  joinStrings,
  isInclude,
  getIndexOfStr,
  replaceStr,
  extractStr,
  splitStr,
  lowercase,
  uppercase,
  removeSpace
};
