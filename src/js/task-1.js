let count = 0;
const timer = setInterval(() => {
  count += 1;
  if (count > 5) {
    clearInterval(timer);
  } else {
    console.log(`${count} second have gone`);
  }
}, 1000);
