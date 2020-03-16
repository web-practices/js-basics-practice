import {
  getMaxNumber,
  isSameCollection,
  computeAverage,
  sum,
  lastEven
} from '../../src/collection/reduce.js';

describe('Reduce practise test', () => {
  it('Get the max number from collection', () => {
    const input = [1, 2, 3, 4, 5];
    const output = getMaxNumber(input);
    expect(output).toBe(5);
  });

  it('Verify that it is the same collection', () => {
    const input = [1, 2, 3, 4, 5];
    const input1 = [1, 2, 3, 4, 5];
    const input2 = [1, 2, 3, 4, 5, 6];
    const output = isSameCollection(input, input1);
    const output2 = isSameCollection(input, input2);
    expect(output).toBeTruthy();
    expect(output2).toBeFalsy();
  });

  it('Compute the sum of collecton', () => {
    const input = [1, 2, 3, 4, 5];
    const output = sum(input);
    expect(output).toBe(15);
  });

  it('Compute the average of collecton', () => {
    const input = [1, 2, 3, 4, 5];
    const output = computeAverage(input);
    expect(output).toBe(3);
  });

  it('Get the last even of collection', () => {
    const input = [1, 2, 3, 4, 5, 6, 9, 11];
    const output = lastEven(input);
    expect(output).toBe(6);
  });
});
