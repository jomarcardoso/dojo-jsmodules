define(["require", "exports", "./counter.js"], function (require, exports, counter_js_1) {
    "use strict";
    exports.__esModule = true;
    var elWrapper = $('.wrapper');
    var value = 0;
    setInterval(function () {
        if (Math.random() * 10 > 4) {
            value = counter_js_1.counter.increment();
        }
        else {
            value = counter_js_1.counter.decrement();
        }
        elWrapper.html(value);
    }, 1000);
});
