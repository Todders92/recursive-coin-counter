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
  const response = [quarter, dime, nickel, penny];
  return response;
};

