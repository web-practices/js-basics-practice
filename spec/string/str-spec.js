const {
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
} = require("../../src/string/str.js");

describe("String Practice Test", function() {
  it("Get char of string by index", () => {
    let input = "Hello world!";
    let output = getCharByIndex(input, 4);
    expect("o").toEqual(output);
  });

  it("Join two strings", () => {
    let hello = "Hello ";
    let world = "world!";
    let output = joinStrings(hello, world);
    expect("Hello world!").toEqual(output);
  });

  it("Check if a string include specific str", () => {
    let input = "Hello world!";
    let output1 = isInclude(input, "Hello");
    let output2 = isInclude(input, "World");
    expect(true).toEqual(output1);
    expect(false).toEqual(output2);
  });

  it("Get the position of the first occurrence of a specified value in a string", () => {
    let input = "Hello world!";
    let output1 = getIndexOfStr(input, "o");
    let output2 = getIndexOfStr(input, "W");
    expect(4).toEqual(output1);
    expect(-1).toEqual(output2);
  });

  it("Replace string with specified value", () => {
    let input = "Hello world!";
    let output = replaceStr(input, "world", "Zhangsan");
    expect("Hello Zhangsan!").toEqual(output);
  });

  it("Extract parts of a string", () => {
    let input = "Hello world!";
    let output = extractStr(input, 6, 11);
    expect("world").toEqual(output);
  });

  it("Split a string into an array of substrings", () => {
    let input = "Hello world!";
    let output = splitStr(input, " ");
    expect(["Hello", "world!"]).toEqual(output);
  });

  it("Convert the string to lowercase letters", () => {
    let input = "Hello world!";
    let output = lowercase(input);
    expect("hello world!").toEqual(output);
  });

  it("Convert the string to uppercase letters", () => {
    let input = "Hello world!";
    let output = uppercase(input);
    expect("HELLO WORLD!").toEqual(output);
  });

  it("Remove whitespace from both sides of a string", () => {
    let input = "        Hello world!        ";
    let output = removeSpace(input);
    expect("Hello world!").toEqual(output);
  });
});
