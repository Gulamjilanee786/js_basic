// ! object

// user
// let user_name = "john";
// let user_email = "";
// let user_password = "";

// ! new keyword / object constructor
 let obj = new Object();
const o = {};

console.log(obj, o);

// ! object leteral {}
let user = {
    "full name": "jilanee",
    email: "jilanee@gmail.com",
    password: "212345678"
};

//* accessing object properties
//? dot notation
console.log(user.name);
let name = user.name;
console.log(name);

//? bracket notation
console.log(user["email"]);
let email = user["email"];
console.log(email);

//* adding new property
console.log(user);
//? dot
user.age = 28;

//? bracket
user["address"] = {
    city: "kathmandu",
    country: "NPL"
};

//* modify
user.name = "jilanee khan";

//! delete
//delete user.address;

// console.log(user);
// console.log(user.address.city);
// console.log(user["address"]["country"]);
// console.log(user["address"]["city"]);

let key = "password";
console.log(user.key);
console.log(user[key]); // user['password']


console.log(user["full name"]);