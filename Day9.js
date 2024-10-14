// Think recursively

// Input
let user = {
  name: "Rishabh kumar",
  address: {
    personal: {
      city: "New Delhi",
      area: "NSP",
    },
    office: {
      city: "Bangalore",
      area: {
        landmark: "Google",
      },
    },
  },
};

// Output

let output = {
  user_name: "Rishabh kumar",
  user_address_personal_city: "New Delhi",
  user_address_personal_area: "NSP",
  user_address_office_city: "Bangalore",
  user_address_office_area_landmark: "Google",
};

// Write a function which will take the input and give the desired mentioned output
let resultObject = {};
const mapper = (input, parent) => {
  for (let key in input) {
    if (typeof input[key] === "object") {
      mapper(input[key], parent + "_" + key);
    } else {
      resultObject[parent + "_" + key] = input[key];
    }
  }
};

mapper(user, "user");
console.log(resultObject);
