 // ! scope
 // visibility / accessibility of variable

 let a = 10; // Global

function demo() {
  let b = 20; // Function

  if (true) {
    let c = 30; // Block
    console.log(a); // Global variable is accessible inside the block
    console.log(b); // Function variable is accessible inside the block
    console.log(c); // Block variable is accessible inside the block
  }

  console.log(b); // Function variable is accessible inside the function
  console.log(c); // This will cause a ReferenceError because c is not accessible outside the block
}

demo();

//* global scope
var global_var = "Global var";
let global_let = "Global let";
const global_const = "Global const";

console.log(global_const, global_let, global_var);

//* block scope {}
if (true) {
    var block_var = "block var";
    let block_let = "block let";
    const block_const = "block const";
    console.log("block");
    //console.log(global_const, global_let, global_var);
    console.log(block_const, block_let, block_var);
}
  //console.log(block_const);
  console.log(block_var);
  //console.log(block_let);

//* function scope
function scope() {
    var function_var = "function var";
    let function_let = "function let";
    const function_const = "function const";
    console.log("function");
    //console.log(global_const, global_let, global_var);
    console.log(function_const, function_let, function_var);
}
scope()

//   //console.log(function_const);
//   //console.log(function_let);
//   //console.log(function_var);

//* lexical scope

// function outer() {
//     let x = "outer var";
//     function inner() {
//         console.log("inner");
//         let y = 10;
//         console.log(x);
//         const fun = () => {
//             console.log("fun");
//             console.log(x);

//         };
//         fun();

//     }
//     inner();
// }
// outer();

//* scope chain

// let x = 500;
// function outer() {
//     //let x = "outer var";
//     function inner() {
//         console.log("inner");
//         //let y = 10;
//         console.log(x);
//         const fun = () => {
//             //let x = 100;
//             console.log("fun");
//             console.log(x);

//         };
//         fun();

//     }
//     inner();
// }
// outer();

// let x = 500;

// if (true) {
//     let x = 30;
//     if(true) {
//         console.log(x);
//         x = 100;

//     }
//     console.log(x);
// }
// console.log(x);

let x = 500;

if (true) {
  let x = 30;
  if (true) {
    console.log(x); // 30
    x = 100;
  }
  console.log(x); // 100
}
console.log(x); // 500

//todo: callstack
//todo: execution context
//todo: memory creation & execution phase


// function one() {
//   console.log("One");
// }

// function two() {
//   one();
//   console.log("Two");
// }

// function three() {
//   two();
//   console.log("Three");
// }

// three();

//* execution context
// 1. global execution context
// 2. function execution context

//* memory creation & execution phase
// 1. memory creation phase
   // 1.variable declaration (var, let, const)
   // 2. function declaration 
   //var a = 10;
   console.log("1");

// 2. execution phase
// 1. variable initialization
//2. function call
// {a: 10, b: undefined, c: function}


//! callstack

function one() {
  console.log("One");

  function two() {
    console.log("Two");

    function three() {
      console.log("Three");
  

one();
}
two();
}
three();
}