//! this keyword

// this keyword is a reference to the current object that is executing the current function.
//this -> object 

//module.exports.name = "John";

// module.exports = {
//     name: "John",
//     age: "18",
// };
// module.exports.email = "";

// console.log(this); // window object



//! function 
// function a() {
//     console.log(this); 
// }
// a(); // global object

// const user = { 
//     name: "John Doe", 
//     getName() { 
//         console.log(this.name);  
//     },
// };
// user.getName(); // Output: John Doe

//! arrow function
// Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical scope. This means that the value of this inside an arrow function is determined by where the function is defined, not where it is called.

// const user = {  
//     name: "John Doe",
//     getName() { 
//         const a = () => {
//         console.log(this);
//     };
//     a();
//   },
// };
// user.getName(); 

// !
// const user = {
//     name: "John Doe",
//     age: 27,
//     getName() {
//         console.log(this.name);
//     },
// };

// let user1 = {
//     name: "Alice",
// };
// user1.age = user.age;
// user1.getName = user.getName;

// user1.getName(); // Alice

// ! Loosing  
// const user = {
//     name: "John Doe",
//     age: 27,
//     getName() {
//         console.log(this.name);
//     },
// };
// const fn = user.getName;
// fn();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
//     getName() {
//         return this.name;
//     }
// }

// const user = new User("John Doe", 28);

// // {} -> this
// // {name: ''}

// const user1 = new User("Alice", 28);


// console.log(user.getName());
// console.log(user1.getName());

//todo: function object , call, apply , bind methods
