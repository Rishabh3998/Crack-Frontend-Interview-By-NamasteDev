// Debouncing

// Debouncing refers to the way we trigger an API call. We don't want to hit an API call
// on every keystroke this is not an efficient way. We trigger an API call if there is some delay
// when the user type any search query, like if there is a delay of 500 ms we hit the API.

const getDataOnEveryKeyStroke = () => {
  // Calls an API on every keystroke to get the Data
  console.log("Fetching...");
};

const debounce = function (callback, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

// To avoid the API call on every keystroke we have to use Debouncing
const debounceSearch = debounce(getDataOnEveryKeyStroke, 300);
