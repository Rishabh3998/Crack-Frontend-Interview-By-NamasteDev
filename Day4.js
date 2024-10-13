// Async and Defer attributes in JS

// These are boolean attributes which are used along with script tags
// to load the external script efficiently into our webpage.

// There are 3 scenarios which we need to know about:

// 1. Simple script tag
// 2. Async attribute with script tag
// 3. Defer attribute with script tag

// When we load a webpage, there are 2 major things which happens
// 1. HTML parsing
// 2. Script loading
//    - Fetching script from the internet
//    - Executing it line by line

// 1. Normal script tag

// Browser starts by parsing HTML line by line and when it suddenly encounters a script tag
// It pause the parsing and starts fetching the script from the internet and then execute it line
// by line then and there, after execution gets complete browser continues with the HTML parsing.

// 2. Script tag with async attribute

// Browser starts with the HTML parsing and asynchronously fetch the script tags with async attribute
// along with the HTML parsing, when all of these async script gets loaded or fetched, browser pause
// HTML parsing and start executing these scripts then and there. Once the execution of these gets
// done, browser continue with the HTML parsing.

// 3. Script tag with defer attribute

// Browser starts with the HTML parsing and asynchronously fetch the script tags with defer attribute
// along with the HTML parsing. When all the HTML parsing gets done, browser starts executing the scripts.

// Note:

// 1. Async attribute does not guarantee the order of execution of these scripts.
// 2. Defer attribute does guarantee the order.

// So if some scripts are dependent on each other then using async attribute will be a bad idea.
// This can break our code therefore in this case defer is the ideal choice.
