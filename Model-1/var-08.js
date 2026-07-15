/*
VAR-08 Problem Specification
Objective:
conversion.
Slabs / Rules:
Given a strict 5-digit integer, compute the sum of all its constituent digits without string
Do not cast, convert, or interpolate the integer into a string or array type. Solve this purely
using mathematical algorithms.
Logical Hint:
Continually extract the last trailing digit using modulo (% 10), add it to your tally, and
truncate the integer downwards using Math.floor().
Expected Case Scenario:
Input: 54321 → Output: 15 (5+4+3+2+1)
*/
// Function to calculate the sum of digits
function sumOfDigits(number) {

    // Variable to store the total sum
    let sum = 0;

    // Loop runs until the number becomes 0
    while (number > 0) {

        // Get the last digit using modulus (%)
        let digit = number % 10;

        // Add the last digit to the sum
        sum = sum + digit;

        // Remove the last digit from the number
        number = Math.floor(number / 10);
    }

    // Return the final sum
    return sum;
}

// Function Call
let result = sumOfDigits(54321);

// Print the result
console.log("Sum of Digits = " + result);