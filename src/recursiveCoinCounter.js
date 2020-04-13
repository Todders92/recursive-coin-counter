// //****RECURSIVE METHOD****/
// //pass in an amount
// //choose from coins the largest that will fit into that amount
// //add chosen coin to change
// //pass remaining money back into function

// const coins = {
//   0: {
//     value = .25,
//     count = 0
//   },
//   1: {
//     value = .10,
//     count = 0
//   },
//   2: {
//     value = .05,
//     count = 0
//   },
//   3: {
//     value = .01,
//     count = 0
//   }
// }
// var index = 0

// const coinCounter = (amount, index, coins) => {
//   // base
//   if (amount === 0) {
//     return coins;
//   } else {
//     console.log(amount)
//     coins.index.count = amount/coins.index.value// first half shoudl be the value of the 0th index, second half should be the key of the 0th index
//     amount -= (coins.index.counter * coins.index.value) //this time, I'm talking about the value of hte 0th index
//     return coinCounter(amount, index + 1, coins)
//   }
// }