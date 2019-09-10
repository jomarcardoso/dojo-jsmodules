define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var value = 0;
    exports.counter = {
        increment: function () { return value += 1; },
        decrement: function () { return value -= 1; }
    };
});
