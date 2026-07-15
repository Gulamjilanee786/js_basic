/*
VAR-09 Problem Specification
Objective:
Take a 4-digit number and return its mathematical reverse without utilizing string
serialization wrappers.
Slabs / Rules:
Do not convert the number into a string, array, or use reverse utilities. Use basic
mathematical operators only.
Logical Hint:
Isolate digits sequentially using division and remainders, then recompile them by shifting
place values (multiply by 10 dynamically).
Expected Case Scenario:
Input: 1234 → Output: 4321
*/

// Function to reverse a number
function reverseNumber(number) {

    // Variable to store the reversed number
    let reverse = 0;

    // Loop runs until the number becomes 0
    while (number > 0) {

        // Get the last digit
        let digit = number % 10;

        // Add the digit to the reversed number
        reverse = reverse * 10 + digit;

        // Remove the last digit from the original number
        number = Math.floor(number / 10);
    }

    // Return the reversed number
    return reverse;
}
// Function Call
let result = reverseNumber(1234);

// Print the result
console.log("Reversed Number = " + result);
