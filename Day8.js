// Prototypes and Prototypal inheritance

// What to be covered ?
// What is prototype ?
// What is prototype chaining ?
// What prototype chain actually is ?
// What is prototypal inheritance ?

// The whole concept of inheritance in javascript is based on prototypal inheritance and prototype is and
// how everything works behind the scenes in JS.

// Inheritance as a concept in JS is totally different then other languages.
// Prototypal inheritance is way different then classic inheritance concept.

// Gist: One object is trying to access the properties and methods of an other object.

// We have n number of built in methods for array, objects, list etc in JS. Eg: length, pop, push etc.
// Whenever we write let arr = []; arr.length, then how are we getting this length function in the
// suggestions ?

// This happening because of the prototype.
// SO when ever we declare any array, object etc then BTS JS attach these to the desired prototypes.
// We have different types of prototypes for every entity like Array, Function, Object etc
// Array.prototype, Function.prototype, Object.prototype etc.
// As we know everything in JS is a javascript object and these objects will get hidden features when
// we declare them. This is all done by JS engine.

// So under the hood JS engine attach an object which contains these hidden features to the declared
// entity or object which can be an array, object, function, variable.

// To access this object attached by the JS engine:
let arr = ["Rishabh", "kumar"];
// __proto__ this is the hidden object where JS reside all the hidden features
// and using dot notation after __proto__ we can access all the hidden features

// __proto__ => This is what prototype is
// It is a hidden object which is attached to every entity, method, object, array, etc, which contains
// the hidden pre-written methods.
console.log(arr.__proto__);

// As we know __proto__ is a prototype and arr.__proto__ again is an object so this also has its own
// prototype i.e arr.__proto__.__proto__ and this is Object.prototype because eventually everything in JS
// is an object.

// object.__proto__.__proto__ is null

// This arr.__proto__.__proto__.__proto__ is called the prototype chaining.

// fun.__proto__ === Function.prototype
// fun.__proto__.__proto === Object.prototype
// fun.__proto__.__proto === Object.prototype.__proto__ === null

// Everything in JS will eventually comes down to Object.prototype because everything is an object.

let object = {
  name: "Rishabh",
  city: "New Delhi",
  getIntro() {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "Ritik",
  city: "Assam",
};

// Never do this
object2.__proto__ = object;

// object2 is now accessing method present inside object
console.log(object2.getIntro()); // Ritik from Assam in console

// To add custom methods in function type of the prototype use:
Function.prototype.myBind = function () {};

// To add custom method in array type use:
Array.prototype.myMap = function () {};
