// Event bubbling and capturing/trickling

// These are the 2 ways of event propagation in the DOM tree.

// Case:

// Suppose we have 2 HTML element
// 1. A div with id='Parent'
// 2. A div inside the above div with id='child'

// If any event occurs on the child it will propagate to its parent.
// Suppose we have onClick event present on the child then when we click on the child
// the event will propagate to parent as well.

// The hierarchy or the sequence of this propagation will be:
// child (clicked) -> parent -> grandparent

// This type of event propagation i.e from child to parent (inner to outer) element
// considered as the event bubbling.

// And the vice versa when event propagate from the parent to child (outer to inner) element
// is considered as the event capturing or event trickling.

// The sequence or order for capturing will be:
// grandparent (clicked) -> parent -> child

// Implementation:
// This can be implemented in the addEventListener handler by passing the boolean value

// Syntax: addEventListener(event, callback, useCaptureBoolean)
// addEventListener("click", () => {}, true/false);

// Using event bubbling (It is used by default)
// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("grandparent clicked");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent clicked");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child clicked");
// });

// Using event capturing
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("grandparent clicked");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   true
// );

// These event propagation process is quite expensive so we have to stop them
// because these can hamper the performance of the web app

document.querySelector("#child").addEventListener(
  "click",
  (event) => {
    console.log("child clicked");
    event.stopPropagation();
  },
  true
);
