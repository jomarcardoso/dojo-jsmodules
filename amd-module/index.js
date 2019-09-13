define(['./counter.js'], function (counter) {
  var $Wrapper = $('.wrapper');

  var value = 0;
  setInterval(function () {
    if (Math.random() * 10 > 4) {
      value = counter.increment();
    } else {
      value = counter.decrement();
    }

    $Wrapper.html(value);
  }, 1000);
});
