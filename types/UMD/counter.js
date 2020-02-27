function content(name, definition) {
  if (typeof module !== 'undefined') {
    module.exports = definition();
  } else if (typeof define === 'function' && typeof define.amd) {
    define(definition);
  } else {
    this[name] = definition();
  }
}

content(function() {
  var value = 0;

  return {
    increment: function () { return value += 1 },
    decrement: function () { return value -= 1 }
  }
});
