import {
  getAllEvens,
  getAllIncrementEvens,
  getIntersectionOfcollections,
  getUnionOfcollections,
  countItems
} from '../../src/collection/filter.js';

describe('Filter collection Practice Test', () => {
  it('Get all evens from collection', () => {
    const input = [1, 2, 3, 4, 5];
    const output = getAllEvens(input);
    expect(output).toEqual([2, 4]);
  });

  it('According to the two Numbers given, the interval of even number is obtained', () => {
    const output = getAllIncrementEvens(1, 10);
    expect(output).toEqual([2, 4, 6, 8, 10]);
  });

  it('Gets the intersection of two collections', () => {
    const input1 = [10, 27, 28, 19, 5];
    const input2 = [5, 78, 28, 19, 23];
    const output = getIntersectionOfcollections(input1, input2);
    expect(output).toEqual([28, 19, 5]);
  });

  it('Gets the union of two collections', () => {
    const input1 = [10, 27, 28, 19, 5];
    const input2 = [5, 78, 28, 19, 23];
    const output = getUnionOfcollections(input1, input2);
    expect(output).toEqual([10, 27, 28, 19, 5, 78, 23]);
  });

  it('Count every item in array', () => {
    const input = [
      'a',
      'b',
      'c',
      'd',
      'd',
      'e',
      'a',
      'b',
      'c',
      'e',
      'e',
      'e',
      'a'
    ];
    const output = countItems(input);
    expect(output).toEqual({ a: 3, b: 2, c: 2, d: 2, e: 4 });
  });
});
