const str = require("../../src/string/str.js");

describe("String Practice Test", function() {
  it("Get char of string by index", () => {
    let input = "Hello world!";
    let output = str.getCharByIndex(input, 4);
    expect("o").toEqual(output);
  });

  it("Join two strings", () => {
    let hello = "Hello ";
    let world = "world!";
    let output = str.joinStrings(hello, world);
    expect("Hello world!").toEqual(output);
  });

  it("Check if a string include specific str", () => {
    let input = "Hello world!";
    let output1 = str.isInclude(input, "Hello");
    let output2 = str.isInclude(input, "World");
    expect(true).toEqual(output1);
    expect(false).toEqual(output2);
  });
});
