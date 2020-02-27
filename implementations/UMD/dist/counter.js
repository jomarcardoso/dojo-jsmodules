(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.counter = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.counter = void 0;
  var value = 0;
  var counter = {
    increment: function () {
      return value += 1;
    },
    decrement: function () {
      return value -= 1;
    }
  };
  _exports.counter = counter;
  var counter = counter;
  _exports.counter = counter;
});