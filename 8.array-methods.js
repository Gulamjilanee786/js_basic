// for in 
// for of

// const numbers = [12, 4, 5, 6, 8, 31];

// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log(numbers[i]);
// }

// for (value of numbers) {
//   console.log(value);
// }

// for (value of "numbers") {
//   console.log(value);
// }

// let user = {
//   name: "John",
//   email: "john@gmail.com",
//   key: "123432",
// };

// for (key in user) {
//   console.log(key, ":", user[key]);
// }

// for (index in numbers) {
//   console.log(index);
// }



//! array methods

//* forEach()
//arr.forEach(callback)
// const callback = (value, index, arr) => {
//     // logic
//     console.log(index);
//     // console.log(value, index, arr);
//     // numbers[index] = value * 2;
// };

// const res = numbers.forEach(callback)

// console.log(numbers);

// numbers.forEach((value, index) => {
//     console.log(value, index);
// });

// numbers.forEach(function (value, index) {
//     console.log(value, index);
// });

// const numbers = [34, 5, 6, 7]; // [68, 10, 12, 14]
// const double = [];


// numbers.forEach(function (value, index) {
//     console.log(value, index);
//     double [index] = value * 2;
// });

// console.log(numbers);
// console.log(double);

//* map
//transformation
// numbers.map(callback)

// const doubled = numbers.map((val, i, arr) => {
//     //console.log("map");
//     return val * 2;
//     //return "x";
    
// });

// console.log(numbers);
// console.log(doubled)

// const users = [
//     {
//     name: "John",
//     email: "john@gmail.com",
// }, 
// {
//     name: "Ram",
//     email: "ram@gmail.com",
// },
// {
//     name: "Dinesh",
//     email: "dinesh@gmail.com",
// },
// ];

// const username = users.map((user) => {
//     console.log(user.name);
//     return user.name
   
// });
// console.log(username);

// users = > ["John", "Ram", "Dinesh"]

//* filter
// arr.filter(callback)
// return new array

const numbers = [12, 4, 5, 6, 8, 34];

// const even = numbers.filter((num, i) => {
//   if (num %2 === 0) {
//     return true;
// } 
// //return num % 2 === 0;
// });


// const even1 = numbers.filter((num) => {
// //   if (num %2 === 0) {
// //     return true;
// // } else {
// //   return false;
// // }
// return num % 2 === 0;
// });

const even2 = numbers.filter((num, i) => num % 2 === 0);

 console.log(numbers);
 //console.log(even1);
 console.log(even2);


//* reduce
// arr.reduce(callback_va)
// return single value

// const total = numbers.reduce ((acc, val) => {
//   acc = acc + val;
//   return acc;
// }, 0);

// console.log(total);
// console.log(numbers);

// // const numbers = [34, 5, 6, 7, 31];
// //console.log(even);

// const res = numbers.find((num, index) => {
//   if (num >= 30){
//     return true;
//   }
// });
// const res1 = numbers.find((num, index) => num >= 30);
// console.log(res1);

   //findIndex(callback):index / -1

// const index = numbers.findIndex((num, index) => {
//   if (num >= 30) {
//     return true;
//   }
// });

// console.log(index);

// //findIndex(callback):index / -1

/// every: boolean
// const isEvery = numbers.every((num, index) => {
//  if (num >= 30){
//     return true;
//   }
// });
// console.log(isEvery);


 // some: boolean
// const some = numbers.some((num, index) => {
//  if (num >= 30){
//     return true;
//   }
// });
// console.log(some);

const cart = {
   userId: 1,
   items: [
      {
         product: {
            _id: 1,
            name: "product1",
            price: 1000,
         },
         quality: 3,
      },
      {
         product: {
            _id: 2,
            name: "product12",
            price: 1200,
         },
         quality: 2,
      },
      {
         product: {
            _id: 10,
            name: "product10",
            price: 1200,
         },
         quality: 4,
      },
   ]
}

// reduce

// const total = cart.items.reduce((sum, item) => {
//    return sum + (item.product.price * item.quality);

// }, 0);

// console.log(total);


const products = [
  {
    _id: 1,
    name: "product 1",
    price: 1000,
    category: "electronics",
  },
  {
    _id: 2,
    name: "product 2",
    price: 1300,
    category: "clothes",
  },
  {
    _id: 4,
    name: "product 4",
    price: 1000,
    category: "electronics",
  },
  {
    _id: 3,
    name: "product 3",
    price: 13000,
    category: "furniture",
  },
  {
    _id: 5,
    name: "product 5",
    price: 1300,
    category: "clothes",
  },
];

const catGroup = products.reduce((acc, product) => {
   if (!acc[product.category]) {
      acc[product.category] = [];
   }

   acc[product.category].push(product);
   return acc;
   }, {});

   console.log(catGroup);


 
// {clothes:[{},{}],furniture:[{},{}],electronics:[{},{}]}

// const groupedProducts = products.reduce((acc, product) => {
//   (acc[product.category] ??= []).push(product);
//   return acc;
// }, {});

// console.log(groupedProducts);
