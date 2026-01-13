const makeChange = (c) => {
  let result = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  // quarters
  result.q = Math.floor(c / 25);
  c = c % 25;

  // dimes
  result.d = Math.floor(c / 10);
  c = c % 10;

  // nickels
  result.n = Math.floor(c / 5);
  c = c % 5;

  // pennies
  result.p = c;

  return result;
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
