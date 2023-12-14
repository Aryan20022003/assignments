const timer = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
};

const callForMinute = () => {
  setInterval(timer, 1000);
};
callForMinute();
