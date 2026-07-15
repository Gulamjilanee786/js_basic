/* VAR-02 Problem Specification
Objective:
Slabs / Rules:
Calculate a customer's total electricity bill based on an tiered unit consumption slab.
Calculate progressively. First 100 units: $1.00/unit. Next 100 units (101-200): $2.00/unit.
Above 200 units: $5.00/unit.
Logical Hint:
slab-by-slab.
Do not charge the maximum tier rate for all units. Process the computation progressively
Expected Case Scenario:
Input: 250 units → Calculation: (100 * 1) + (100 * 2) + (50 * 5) → Output: $550 */

function calculateElectricityBill(units) {
  let bill = 0;

if (units <= 100) {
    bill = units * 1;
}
else if (units <= 200) {
    bill = (100 * 1) + ((units - 100) * 2);
}
else {
    bill = (100 * 1) + (100 * 2) + ((units - 200) * 5);
}

  return `$${bill}`;
}

// Tests
console.log(calculateElectricityBill(250)); // $550
