import {
  doubleItem,
  doubleEvenItem,
  covertToCharArray,
  getOneClassScoreByASC
} from '../../src/collection/map.js';

describe('Map Practis Test', () => {
  it('Double every item in array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = doubleItem(input);
    expect(output).toEqual([2, 4, 6, 8, 10]);
  });

  it('Double even item in array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = doubleEvenItem(input);
    expect(output).toEqual([4, 8]);
  });

  it('Covert number array to char array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = covertToCharArray(input);
    expect(output).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('Get scores by asc of one class', () => {
    const input = [
      {
        name: 'zhangsan',
        class: 1,
        score: 99
      },
      {
        name: 'lisi',
        class: 1,
        score: 89
      },
      {
        name: 'wangwu',
        class: 2,
        score: 59
      },
      {
        name: 'zhaoliu',
        class: 2,
        score: 60
      },
      {
        name: 'hans',
        class: 1,
        score: 55
      }
    ];
    const output = getOneClassScoreByASC(input);
    expect(output).toEqual([55, 89, 99]);
  });
});
