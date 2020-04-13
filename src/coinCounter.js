// const change = {Quarter: .25, Nickel: .05, Dime: .1, Penny: .01}

// const coinCounter = (counter) => {
//   if (counter === 0)
//   {
//     return [];
//   }
//   else{
//     return coinCounter()
//   }
// }


export const coinChange = (cents) => {
  let quarter = Math.floor(cents/25);
  cents -= 25*quarter
  let dime = Math.floor(cents/10);
  cents -= 10*dime
  let nickel = Math.floor(cents/5);
  cents -= 5*nickel
  let penny = cents;
  console.log('Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}');
  return ('Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}');
};


//****RECURSIVE METHOD****/
//pass in an amount
//choose from coins the largest that will fit into that amount
//add chosen coin to change
//pass remaining money back into function

// const coins = {
//   0: {
//     coin = "Quarter",
//     value = .25,
//     count = 0
//   },
//   1: {
//     coin = "Dime",
//     value = .10,
//     count = 0
//   },
//   2: {
//     coin = "Nickel",
//     value = .05,
//     count = 0
//   },
//   3: {
//     coin = "Penny",
//     value = .01,
//     count = 0
//   }
// }
// var index = 0

// const coinCounterCaty = (amount, index) => {
//   if (amount === 0) {
//     return 0;
//   } else {
//     console.log(amount)
//     coins.index.count = amount/coins.index.value// first half shoudl be the value of the 0th index, second half should be the key of the 0th index
//     amount -= (coins.index.counter * coins.index.value) //this time, I'm talking about the value of hte 0th index
//     return coinCounter(amount, index + 1)
//   }
// }