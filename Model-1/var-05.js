/* VAR-05 Problem Specification
Objective:
Compute the final total checkout amount given the base price of an item and its active
discount percentage.
Slabs / Rules:
currency cents.
Logical Hint:
The final output must be rounded to exactly two decimal places representing financial
Calculate the discount fraction via (price * discount / 100). Use the primitive number utility
.toFixed(2) to secure precision.
Expected Case Scenario:
Input: Price = $125.50, Discount = 15% → Output: $106.68   
*/
function calculateFinalPrice(price, discount) {
    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;

    return finalPrice.toFixed(2);
}

// Function Call
let result = calculateFinalPrice(125.50, 15);

console.log("Final Checkout Amount: $" + result);