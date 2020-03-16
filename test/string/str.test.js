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
} from '../../src/string/str.js';

describe('String Practice Test', () => {
  it('Get char of string by index', () => {
    const input = 'Hello world!';
    const output = getCharByIndex(input, 4);
    expect(output).toBe('o');
  });

  it('Join two strings', () => {
    const hello = 'Hello ';
    const world = 'world!';
    const output = joinStrings(hello, world);
    expect(output).toBe('Hello world!');
  });

  it('Check if a string include specific str', () => {
    const input = 'Hello world!';
    const output1 = isInclude(input, 'Hello');
    const output2 = isInclude(input, 'World');
    expect(output1).toBe(true);
    expect(output2).toBe(false);
  });

  it('Get the position of the first occurrence of a specified value in a string', () => {
    const input = 'Hello world!';
    const output1 = getIndexOfStr(input, 'o');
    const output2 = getIndexOfStr(input, 'W');
    expect(output1).toBe(4);
    expect(output2).toBe(-1);
  });

  it('Replace string with specified value', () => {
    const input = 'Hello world!';
    const output = replaceStr(input, 'world', 'Zhangsan');
    expect(output).toBe('Hello Zhangsan!');
  });

  it('Extract parts of a string', () => {
    const input = 'Hello world!';
    const output = extractStr(input, 6, 11);
    expect(output).toBe('world');
  });

  it('Split a string into an array of substrings', () => {
    const input = 'Hello world!';
    const output = splitStr(input, ' ');
    expect(output).toEqual(['Hello', 'world!']);
  });

  it('Convert the string to lowercase constters', () => {
    const input = 'Hello world!';
    const output = lowercase(input);
    expect(output).toBe('hello world!');
  });

  it('Convert the string to uppercase constters', () => {
    const input = 'Hello world!';
    const output = uppercase(input);
    expect(output).toBe('HELLO WORLD!');
  });

  it('Remove whitespace from both sides of a string', () => {
    const input = '        Hello world!        ';
    const output = removeSpace(input);
    expect(output).toBe('Hello world!');
  });
});
