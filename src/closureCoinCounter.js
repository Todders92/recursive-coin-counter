
export const coinCounter = (amount) => {
  const quarter = Math.floor(amount/25);
  amount -= (25 * quarter);
  return (amount) => {
    const dime = Math.floor(amount/10);
    amount -= 10 * dime;
    return amount;
    // => {
  //     const nickel = Math.floor(amount/5);
  //     amount -= 5 * nickel;
  //     return (amount) => {
  //       const penny = amount;
  //       const change = [quarter, dime, nickel, penny];
  //       return change;
  //     }
  //   }
  }
}

function closureCounter(totalCost) {
  return denomination => {
    return (Math.floor(totalCost / denomination));
  };
}

const cost = closureCounter(499);
cost(25);