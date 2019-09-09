define(function() {
  var value = 0;

  return {
    increment: function () { return value += 1 },
    decrement: function () { return value -= 1 }
  }
});