"use strict";

var _counter = require("./counter");

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