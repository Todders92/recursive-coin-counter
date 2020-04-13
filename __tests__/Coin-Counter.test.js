import { coinChange } from '../src/coinCounter.js';

describe('', () => {

  test('should return number of quarters', () => {
    var number = coinChange(100);
    expect(number[0]).toEqual(4);
  });

  test('should return number of nickels', () => {
    var number = coinChange(100);
    expect(number[0]).toEqual(4);
  });
});