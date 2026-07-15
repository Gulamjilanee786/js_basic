// ? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

//* behavior of js of processing variables and function declaration before executing the code is called hoisting

// * Hoisting with var
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// * Hoisting with let
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
//* (TDZ) Temporal Dead Zone  means the time between the creation of a variable and its initialization, during which the variable cannot be accessed. This is a behavior specific to variables declared with let and const, which are hoisted but not initialized until their declaration is evaluated.
let b = 20;
console.log(b); // 20

// * Hoisting with const
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // 30

one();

function one() {
    console.log("One");
}

// function expression
 // console.log(two()); // TypeError: two is not a function
// var two = function() {
//     console.log("Two");
// };
// two(); // Two

// two();
// var two = () => {
//     console.log("two");
// };
// two(); // ()=> {}()

three();  //ReferenceError: Cannot access 'three' before initialization
let three = () => {
    console.log("three"); 
};
three();
