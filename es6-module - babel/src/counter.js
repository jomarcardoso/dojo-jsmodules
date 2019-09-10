var value = 0;

var counter = {
  increment: function () { return value += 1 },
  decrement: function () { return value -= 1 }
}

export var counter = counter;