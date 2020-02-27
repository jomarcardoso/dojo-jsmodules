(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./counter"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./counter"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.counter);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_counter) {
  "use strict";

  var elWrapper = $('.wrapper');
  var value = 0;
  setInterval(function () {
    if (Math.random() * 10 > 4) {
      value = _counter.counter.increment();
    } else {
      value = _counter.counter.decrement();
    }

    elWrapper.html(value);
  }, 1000);
});