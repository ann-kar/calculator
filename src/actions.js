function sum(a, b) {
  return a + b;
}

function multi(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }

  return a * (b);
}

const actions = {
  sum,
  multi,
};

module.exports = actions;
