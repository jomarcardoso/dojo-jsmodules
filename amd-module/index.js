define(['./counter.js'], (counter) => {
  var elWrapper = $('.wrapper');

  setInterval(() => {
    var value = 0;

    if (Math.random() * 10 > 4) {
      value = counter.increment();
    } else {
      value = counter.decrement();
    }

    elWrapper.html(value);
  }, 1000);
});
