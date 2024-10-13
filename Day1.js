// Call, Apply and Bind Methods

let name = {
  firstName: "Rishabh",
  lastName: "Kumar",
  printFullName: function () {
    // Here 'this' keyword is pointing to the firstName and lastName present in the 'name' object
    // because we are using traditional function syntax and in this syntax 'this' points to the
    // just above parent object which in this case is name.
    console.log(this.firstName + " " + this.lastName);
  },
  printFullNameArrow: () => {
    // Here 'this' keyword will point to the 'window' object where firstName and lastName are not
    // present. This is happening because we are using arrow function syntax and in this syntax
    // 'this' keyword points to the window object.
    console.log(this.firstName + " " + this.lastName);
  },
  printFullNameArrowAccessible: function () {
    // As we were using arrow function syntax firstName and lastName were inaccessible but they
    // can be accessible if we wrap the arrow function code inside the traditional function
    // syntax because then 'this' inside arrow function will point to the parent function which is
    // traditional and it will point to the keys present in the name object.
    return () => {
      console.log(this.firstName + " " + this.lastName);
    };
  },
};

name.printFullName();
name.printFullNameArrow();
name.printFullNameArrowAccessible()();

let username = {
  firstName: "Sachin",
  lastName: "Tendulkar",
  // Now, we can copy the above printFullName function to create the functionality of printing
  // the full name but this will defeat the whole purpose of DRY principle because we are
  // creating duplicacy in the code.

  // Solution for this is to use 'call' method which helps in function borrowing. We can borrow
  // functions from other object (Object 1) and use it on some other object (Object 2). Each and
  // every function in JS has access to this function (call, apply, bind) by default.
};

// Call:
// Function borrowing using call
// Syntax: Object1.functionName.call(Object2(Which needs borrowing), args);
// Syntax: functionName.call(Object2(Which needs borrowing), args);
name.printFullName.call(username);

// Generally we don't keep these utility function inside any object because and objects can use
// these utilities there for we keep these functions outside and use call to use this function
// with any desired object.

let printName = function (hometown, state, extra) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      " state: " +
      state +
      " " +
      extra
  );
};

printName.call(name, "New Delhi", "Delhi");
printName.call(username, "Mumbai", "Maharashtra");

// Apply:
// Function borrowing using apply
// This same utility of function borrowing can be done using apply as well.
// Just the syntax will tweak a little bit.

// Syntax: Object1.functionName.call(Object2(Which needs borrowing), [args]);
// Syntax: functionName.call(Object2(Which needs borrowing), [args])
printName.apply(name, ["New Delhi", "Delhi"]);

// Bind:
// Function borrowing using bind
// Bind works a little different, it will bind the method with the object and will
// return the copy of the attached method which can be used at multiple places.

// Syntax: Object1.functionName.call(Object2(Which needs borrowing), args);
// Syntax: functionName.call(Object2(Which needs borrowing), args)
let boundMethod = printName.bind(username, "Mumbai", "Maharashtra");
boundMethod();

// Polyfill Bind:

// If we keep any method in Function.prototype then each and every function we write will have the
// access to those custom methods.
Function.prototype.myBind = function (...args) {
  // In myBind function 'this' will point to the function on which this muyBind will be called
  // or attached like this will point to printName.
  let obj = this;
  let restArgs = args.slice(1);
  return function (...args2) {
    obj.call(args[0], ...restArgs, ...args2);
  };
};

let myBoundMethod = printName.myBind(username, "Mumbai", "Maharashtra");
// Suppose we pass the 'Extra arg' in the returned function then in myBind
// function, it will be received as args2 in the returned function.
myBoundMethod("Extra arg");
