// // ! Array

// // * Array is a collection of similar data types

// // list 

// //? element 
// //? number index -> start from 0
// //? 0th index -> 1st element

// // let num = 1;
// // let num1 = 2;

// //! Array constructor / new keyword
// const arr = new Array();

// //const arr = Array.from()
// // ! Array literal []
// const numbers = [1, 2, 3, 4];

// // console.log(arr, numbers);

// let el = numbers[0];
// console.log(el); // 1
// console.log(numbers[0]); // 1


// console.log(numbers[2]);
// console.log(numbers[3]);

// //* adding new element

// //? push() -> add new element at the end of the array

// //! form end
// //? arr.push()
// // numbers.push(12); //

// const a = numbers.push(12, 45, 67); //
// // console.log("a", a);
// // console.log(numbers);

// //? unshift() -> add new element at the start of the array

// //! from start index
// //? arr.unshift()
// numbers.unshift(34, 21);
// console.log(numbers);

// //* remove element
// //! from end
// //? pop() -> remove last element from the array
// // const b = numbers.pop(); //
// // console.log("b", b);

// //! from start
// // arr.shift()
// //? shift() -> remove first element from the array
// // const b = numbers.shift();
// // console.log("b", b);

// //* length
// console.log(numbers.length);

// console.log(numbers.push(69, 45));
// console.log(numbers[numbers.length - 1]);

// // console.log((numbers[-1]));
// console.log(numbers);

// //* at()
// console.log(numbers.at(0)); // numbers[0]
// console.log(numbers.at(-1)); // last index
// console.log(numbers.at(-3));

// //* splice(start_index, delete_count, new_element1, new_element2, ...)

// const b = numbers.splice(2, 0, 10, 100, 200);
// console.log(b);

// numbers[1] = 30;
// numbers.splice(1, 1, 30);

// //* searching

// //? includes
// //arr.includes(el) -> return boolen
// console.log(numbers.includes(21)); // true
// console.log(numbers.includes(210)); // false

// //* indexOf
// // arr.indexOf(el) -> return index of the element
// console.log(numbers.indexOf(21)); // 3
// console.log(numbers.indexOf(210)); // -1
// console.log(numbers.indexOf(45)); // 7

//* lastIndexOf
// arr.lastIndexOf(el) -> return last index of the element
// console.log(numbers.lastIndexOf(45)); // 10
// console.log(numbers.lastIndexOf(210)); // -1

// console.log(numbers.concat([12, 34]));

// console.log(numbers.join("-"));
// console.log(
//     [
//     [23, 45, [23]],
//     [22, 4]
//     ].flat(2),
// );

// let user =  [{ name: "abc", email: "" }];

// users.push({name: "xyz", email: "" });

// console.log(users);
// console.log(users[0]);

//const numbers = [34, 5, 6, 7];



