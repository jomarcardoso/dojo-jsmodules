define(() => {
  var value = 0;

  return {
    increment: () => value += 1,
    decrement: () => value -= 1
  }
})