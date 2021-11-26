function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }

  return a * (b);
}

function div(a, b) {
  if (b === 0) {
    throw new Error('You cannot divide by zero');
  }
  return a / (b);
}

const actions = {
  sum,
  sub,
  multi,
  div,
};

export default actions;
