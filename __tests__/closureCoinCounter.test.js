import { coinCounter } from '../src/closureCoinCounter.js';

describe('', () => {

  test('should return correct amount', () => {
    var number = coinCounter(110);
    console.log("AMOUNT:" + number)
    expect(number).toEqual(1);
  });

  // test('should return correct number of quarters', () => {
  //   var quarters = coinCounter(100);
  //   console.log("AMOUNT:" + number)
  //   expect(quarters).toEqual(0);
  // });

  // test('should return number of all coins', () => {
  //   var number = coinCounter(41);
  //   expect(number).toEqual([1, 1, 1, 1]);
  // });
});