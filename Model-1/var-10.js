/*
VAR-10 Problem Specification
Objective:
Slabs / Rules:
Calculate the Equated Monthly Installment (EMI) for a fixed-term personal loan.
Formula: EMI = [P * r * (1+r)^n] / [(1+r)^n - 1]. P = Principal, r = Monthly interest rate
(Annual Rate / 12 / 100), n = tenure in months.
Logical Hint:
Utilize Math.pow() to perform exponential powers cleanly. Ensure financial outputs round
smoothly to 2 decimal units.
Expected Case Scenario:
Input: Principal = $100,000, Annual Rate = 12%, Months = 12 → Output: $8884.88
*/
// Function to calculate EMI
function calculateEMI(principal, annualRate, months) {

    // Convert annual interest rate into monthly interest rate
    let monthlyRate = (annualRate / 12) / 100;

    // Calculate (1 + r)^n using Math.pow()
    let power = Math.pow(1 + monthlyRate, months);

    // Apply EMI Formula
    let emi = (principal * monthlyRate * power) / (power - 1);

    // Return EMI rounded to 2 decimal places
    return emi.toFixed(2);
}

// Function Call
let result = calculateEMI(100000, 12, 12);

// Print the result
console.log("Monthly EMI = $" + result);