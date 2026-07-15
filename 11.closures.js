//! closure   what is closure in javascript
//A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are created whenever a function is defined inside another function, allowing the inner function to "remember" the environment in which it was created.

// function outer(){
//     let x = 10;

//     console.log(x); // Output: 10 - outer function has access to its own variable x
// }
// outer(); // Call the outer function

// const outer = () => {
//     let x = "outer"; // outer function variable

//     const inner = () => {
//         console.log(x); // Accessing variable from outer function
//     };
//      return inner; // outer() returns the inner function
// };

// const child = outer(); // outer() returns the inner function
// child(); // Output: "outer" - inner function has access to x from outer function

//! private variables using closure
// A closure can be used to create private variables in JavaScript. By defining a variable in the outer function and returning an inner function that accesses that variable, you can create a private scope that is not accessible from the outside.

// const Counter = () => {
//     let count = 1; // private variable

//     const increment = () => {
//         return count++; // inner function has access to count
//     };
//      return increment;
// };

// const counter = Counter(); // Counter() returns the increment function
// const counter1 = Counter(2); // Counter() returns the increment function

// console.log(counter()); // Output: 1 - first call to counter
// console.log(counter()); // Output: 2 - second call to counter
// console.log(counter1()); // Output: 1 - first call to counter1, independent of counter
// console.log(counter()); // Output: 3 - third call to counter

//  const Counter = (initial = 1) => {
//     let count = initial// private variable

//     const inc = () => {
//         return count++; // inner function has access to count
//     };
//      const decrement = () => {
//         return count--; // inner function has access to count
//     }

//     return {
//         increment: inc,
//         decrement,
//     };
// };

//  const counter = Counter(); // Counter() returns the increment function
//  const counter1 = Counter(2); // Counter() returns the increment function

//  console.log(counter.increment()); // Output: 1 - first call to counter
//  console.log(counter.increment()); // Output: 2 - second call to counter
//  console.log(counter1.increment()); // Output: 2 - first call to counter1, independent of counter
//  console.log(counter1.increment()); // Output: 3 - second call to counter1, independent of counter
//  console.log(counter.decrement()); // Output: 2 - first call to counter decrement
//  console.log(counter1.decrement()); // Output: 2 - first call to counter1 decrement

//! function factory using closure
// A function factory is a function that returns another function. Closures are often used in function factories to create specialized functions with specific behavior based on the parameters passed to the factory function.
// 10 add 5
// 10 add 10
// const add = (factor) => {
//   // add is a function that takes a factor as an argument
//   return (num) => {
//     // inner function that takes a number as an argument
//     return factor + num; // inner function has access to factor from the outer function
//   };
// };

// const add5 = add(5); // add5 is a function that adds 5 to its argument
// const add10 = add(10); // add10 is a function that adds 10 to its argument

// console.log(add5(10)); // Output: 15 - adds 5 to 10
// console.log(add5(100)); // Output: 105 - adds 5 to 100
// console.log(add5(30)); // Output: 35 - adds 5 to 30

// console.log(add10(12)); // Output: 22 - adds 10 to 12

//! caching  => what is caching in javascript
// Caching in JavaScript refers to the practice of storing data or results of expensive operations in memory so that they can be quickly retrieved later without having to recompute or fetch them again. This can significantly improve performance, especially for operations that are called frequently or involve complex calculations.

function calculate() {
  let cache = {}; // Object to store cached results

  return (num) => {
    if (cache[num]) {
      console.log("cache");
      return cache[num]; // Return cached result if available
    }

    console.log("calculating");
    for (let i = 0; i <= 999999999; i++) {} // Simulate an expensive operation

    cache[num] = num * num;
    return cache[num]; // Store and return the result
  };
}

const square = calculate(); // calculate() returns the inner function
console.log(square(2));
console.log(square(2)); // This call will use the cached result
console.log(square(4)); // This call will compute and cache the result for 4
console.log(square(2)); // This call will use the cached result for 2
console.log(square(2)); // This call will use the cached result for 2
console.log(square(4));
console.log(square(4));
