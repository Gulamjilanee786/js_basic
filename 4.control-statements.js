// ! control flow

// ! control statements

//* conditional statements

// if 
// let age = 17;
// if (age >= 18) {
//     console.log("You can vote.");
// }


// if else
//     if (age >= 18) {
//     console.log("You can vote.");
// } else {
//     console.log("You cannot vote.");
// }

// else if ladder

//age >= 60 => Major

//age >= 18 => adult

//else -> minor

// let age = 78;

// if (age >= 60) {
//     console.log("Major");
// } else if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

//* switch case
// let day = 3;

// switch (day) {
//     case 1: {
//         console.log("Sunday");
//         break;
//     }
//     case 2: {
//         console.log("Monday");
//         break;
//     }
//     case 3: {
//         console.log("Tuesday");
//         break;
//     }
//     case 4: {
//         console.log("Wednesday");
//         break;
//     }
//     case 5: {
//         console.log("Thursday");
//         break;
//     }
//     case 6: {
//         console.log("Friday");
//         break;
//     }
//     case 7: {
//         console.log("Saturday");
//         break;
//     }
//     default: {
//         console.log("Enter day between 1-7");
//     }
// }

// case 1,7 -> weekend
//  let day = 7;


let day = 7 ;

switch (day) {
    case 1:
    case 7: {
        console.log("Weekend");
        break;
    }
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: {
        console.log("Week day");
        break;
    }
    default: {
        console.log("Enter day between 1-7");
    }
}





// case 2-6 -> workday
 


//* loops
//!
//* do while

// console.log("Do while");

// let i = 11;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

 // *while
// console.log("While");

// let j = 11;
// while (j <= 10) {
//     console.log(j);
//     j++;
// }

//* for

let i = 100;

// for (let i =0; i <= 100; i++) {
//     console.log(i);
// }

//* jump / branch keywords
//? break
// for (let i = 0; i <= 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }
//? continue
// for (let i = 0; i <= 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

//? return
// for (let i = 0; i <= 10; i++) {
//     if (i === 6) {
//         return;
//     }
//     console.log(i);
// }

// even odd
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// even odd using loop continue 
//  for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//         continue;
//     }
//     console.log(i + " is odd");
// }

for (let i = 0; i <= 10; i++) {
    if (i % 2  !== 0) {
        continue;
    }
        console.log(i);
    }

// for in 

//for or
