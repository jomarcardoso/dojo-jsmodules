import counter from './counter.js';

const elWrapper = $('.wrapper');

setInterval(() => {
  let value = 0;

  if (Math.random() * 10 > 4) {
    value = counter.increment();
  } else {
    value = counter.decrement();
  }

  elWrapper.html(value);
}, 1000);