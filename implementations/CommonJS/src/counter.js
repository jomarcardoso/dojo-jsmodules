var value = 0;

const counter = {
  increment: function () { return value += 1 },
  decrement: function () { return value -= 1 }
}

module.exports = counter;