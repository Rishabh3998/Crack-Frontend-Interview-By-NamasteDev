// Local storage and session storage

// These web storage API's are used by the developers to store some data in the web browsers.
// These are key value pairs of strings. There are 2 ways to store data via local storage and
// session storage, when we use session storage we can persist data only for the particular session.

// Suppose a user visits a website and when the tab will be closed the session will also close.

// Session storage is useful then cookies, unlike cookies session storage data is not being sent to
// the server while making the network request calls.

// This has larger capacity to store unlike cookies where we can only store 4000 bytes of data.
// In session we can minium store 5 MB's of data.

// Local storage is same like session storage, just the advantage is that it does not get cleared
// itself, no expiration is there, even if user close the tab, browser even the system data will not
// clear or expire, it is the developers duty to clear the data from the local storage.
// Local storage memory capacity depends upon the what type of device we are using, but roughly
// it is 5 MB for sure even if we are using a mobile phone.

// Most of the companies use local storage to store user specific data.
// Getting data from local storage is much faster then the API call, therefore most of the companies
// store some user specific data inside the local storage.

// Use-cases:
// AB testing
// Optimize the speed of the web app
// storing user centric data

// These API's use the same origin policy because of the security reasons.
// origin: protocol (http/https) + Host/Domain (www.flip-kart.com) + PORT (8080)

localStorage.setItem("key", 1000);
localStorage.setItem("key2", 1000);
localStorage.setItem("key3", 1000);
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();

const user = {
  name: "Rishabh",
};

localStorage.setItem("user", JSON.stringify(user));
JSON.parse(localStorage.getItem("user"));
