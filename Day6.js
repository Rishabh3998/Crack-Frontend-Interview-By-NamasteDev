// Event Delegation

// When we have n number of HTML elements and these elements have n numbers of event handlers
// attached to them, then this can create a performance bottleneck so to tackle this performance
// issue we use a technique called event delegation.

// Case study:

// Suppose we have a catalog with infinite scroll and we attach event listeners to each catalog item
// then whenever new items get loaded new event listeners has to be attached there which can cause
// issues with the web-app performance. After a certain amount of time our page will have the n number
// of event listeners hanging around which is not good.

// So a better way to handle the above situation is by event delegation. It states that instead of attaching
// n number of event listeners to each and every element we should attach the event listener to the parent
// of these child elements.

// So just attach a single event listener to the parent HTML element. So when user will click on any child
// element the event will be bubble out to the parent and then the callback present inside the handler
// will be called.

document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id); // This will give the id present in the child element
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e.target.id); // This will give the id present in the child element
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

// Advantages:
// So now as we know we are only attaching a single event listener to the parent element this means
// we are saving the lot of memory and also improving the performance of the app by great margin because
// now any number of child elements can be added here but it won't have any effect to the performance.

// Limitations:
// All the events are not bubbled up like blur, focus, resizing of the window, scrolling etc.
// So we cannot use event delegation there.
// Also if we are using stopPropagation then event delegation will not work. Because event bubbling is the
// concept which is used for event delegation.
