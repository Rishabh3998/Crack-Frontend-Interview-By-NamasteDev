// Debouncing vs Throttling

// These concepts are generally used in performance optimization, rate limiting of certain function calls
// or function execution. We use these for optimizing the performance of a web-app.

// How do we do it?
// By limiting the rate of the function calls. These functions can be anything like fetching data from API,
// Logging in some system etc. So, sometimes we attach a function to an event listener and due to which it
// gets called a lot of times unnecessarily, which can hamper our performance. So, we have to limit its rate
// of execution, and we do this by using debouncing or throttling.

// Please revise Debouncing from Day3 file, we will cover throttling in this file.

// Debouncing: It says that only fire the function or make an API call if the difference between 2 key press
// event is greater than the certain limit (defined time delay). If this does not happen then on each key
// press the API call will happen.

// Throttling: Suppose lots of key press events are happening then only make the function call after a certain
// time limit. Suppose you set 300ms as your threshold then just fire the function after the threshold every
// time, the time that is there between the threshold ignore the key presses.

// Difference in a nutshell:

// Debouncing: In this case the function will be fire only if the time between 2 key press events exceed the
// defined time threshold. So if no key press will be there after whole string is written then no function
// will be fire.

// Throttling: In this case the function will fire automatically after the defined time delay. This behavior
// will be constant, if user will stop typing then still the function will fire after the defined time delay.
// So here we are calling an API after certain amount of time.

// So in any search bar debouncing makes more sense because user will stop after a certain search and when it
// stops we don't want to call API again and again. That's why we use debouncing.

// Throttling makes more sense if we are using infinite scroll kind of thing. When a user is resizing a browser.
// At that time we can use throttling.

// addEventListener('resize', () ={
//    trackResizeApi();
// })
