/* VAR-03 Problem Specification
Objective:
Split a total amount evenly among N friends and display the individual share along with
the remaining leftover change.
Slabs / Rules:
Individual shares must be flat integers (no cents). Leftover remainder change must be
calculated and stored as a standalone value.
Logical Hint:
Utilize Math.floor() to compute the clean integer split, and the modulo operator (%) to
capture the exact remainder.
Expected Case Scenario:
Input: Total = $100, Friends = 3 → Output: Each pays $33, Remainder = $1 */

function splitAmount(total, friends) { 

    let eachShare = Math.floor(total / friends);
    let remainder = total % friends;

    return {
        eachShare: eachShare,
        remainder: remainder
    };
}

let result = splitAmount(100, 3);

// console.log("Total Amount: $" + 100);
// console.log("Number of Friends: " + 3);

console.log("Each Friend Pays: $" + result.eachShare); // Output: Each pays $33
console.log("Remaining Amount: $" + result.remainder); // Output: Remainder = $1