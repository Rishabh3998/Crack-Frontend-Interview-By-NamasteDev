// Throttling

const expensive = () => {
  console.log("expensive");
};

const throttle = (callback, limit) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      callback.apply(this, ...args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, limit);
  };
};

const betterExpensive = throttle(expensive, 2000);

window.addEventListener("resize", betterExpensive);
