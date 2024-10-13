// Currying

// Using Bind method:

let multiply = function (x, y) {
  console.log(x * y);
};

// Here we don't care about the first arg because it has to be an object and we don't want to
// use this on any object therefore we passes 'this' as the first arg.

// 2 is the fixed arg here
// Now after passing one arg at every func call we can curry our function
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

// 3 is the fixed arg here
// Now after passing one arg at every func call we can curry our function
let multiplyByThree = multiply.bind(this, 3);
multiplyByTwo(5);

// This above functionality is similar to currying because we ar only passing one arg at a time.

// Using Closures:

let multiplyWithClosure = function (x) {
  // outer scope (x is accessible but y is not)
  return function (y) {
    // inner scope (x is accessible)
    console.log(x * y);
  };
};

multiplyWithClosure(2)(3);
