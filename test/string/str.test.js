import {
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
} from "../../src/string/str.js";

describe("String Practice Test", function() {
  it("Get char of string by index", () => {
    let input = "Hello world!";
    let output = getCharByIndex(input, 4);
    expect(output).toBe("o");
  });

  it("Join two strings", () => {
    let hello = "Hello ";
    let world = "world!";
    let output = joinStrings(hello, world);
    expect(output).toBe("Hello world!");
  });

  it("Check if a string include specific str", () => {
    let input = "Hello world!";
    let output1 = isInclude(input, "Hello");
    let output2 = isInclude(input, "World");
    expect(output1).toBe(true);
    expect(output2).toBe(false);
  });

  it("Get the position of the first occurrence of a specified value in a string", () => {
    let input = "Hello world!";
    let output1 = getIndexOfStr(input, "o");
    let output2 = getIndexOfStr(input, "W");
    expect(output1).toBe(4);
    expect(output2).toBe(-1);
  });

  it("Replace string with specified value", () => {
    let input = "Hello world!";
    let output = replaceStr(input, "world", "Zhangsan");
    expect(output).toBe("Hello Zhangsan!");
  });

  it("Extract parts of a string", () => {
    let input = "Hello world!";
    let output = extractStr(input, 6, 11);
    expect(output).toBe("world");
  });

  it("Split a string into an array of substrings", () => {
    let input = "Hello world!";
    let output = splitStr(input, " ");
    expect(output).toEqual(["Hello", "world!"]);
  });

  it("Convert the string to lowercase letters", () => {
    let input = "Hello world!";
    let output = lowercase(input);
    expect(output).toBe("hello world!");
  });

  it("Convert the string to uppercase letters", () => {
    let input = "Hello world!";
    let output = uppercase(input);
    expect(output).toBe("HELLO WORLD!");
  });

  it("Remove whitespace from both sides of a string", () => {
    let input = "        Hello world!        ";
    let output = removeSpace(input);
    expect(output).toBe("Hello world!");
  });
});
