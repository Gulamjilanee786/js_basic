/* 
VAR-06 Problem Specification
Objective:
Calculate an employee's total weekly payroll salary including overtime rules based on
hours worked and baseline hourly pay.
Slabs / Rules:
Regular hours threshold is capped at 40 hours/week. Any hours worked over 40 are
overtime, compensated at 1.5 times the standard rate.
Logical Hint:
Use an if-else structural check. Isolate regular hours from overtime hours before
multiplying by their respective rates.
Expected Case Scenario:
Input: Hours worked = 45, Rate = $20/hr → Calculation: (40 * 20) + (5 * 30) →
Output: $950
*/

function calculateWeeklySalary(hoursWorked, hourlyRate) {
    let salary;

    if (hoursWorked <= 40) {
        salary = hoursWorked * hourlyRate;
    } else {
        let overtimeHours = hoursWorked - 40;
        salary = (40 * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
    }

    return salary.toFixed(2);
}

// Function Call
let result = calculateWeeklySalary(45, 20);

console.log("Total Weekly Salary: $" + result);