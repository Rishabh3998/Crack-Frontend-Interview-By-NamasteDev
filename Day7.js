// Infinite currying
// sum(1)(2)(3)(4)...()

function sum(num) {
  return function (innerNum) {
    if (num) return sum(num + innerNum);
    return num;
  };
}

sum(1)(2)(3)(4)();
