/*
OP-03 Problem Specification
Objective:
form a real triangle.
Slabs / Rules:
Given three side lengths, write a rule validation system to check whether they can legally
Triangle Inequality Theorem: A triangle is only valid if the sum of the lengths of any two
sides is strictly greater than the remaining third side.
Logical Hint:
Verify all three possible pairings: (a + b > c) && (a + c > b) && (b + c > a).
Expected Case Scenario:
Input: 3, 4, 5 → Output: true (Valid) | Input: 1, 2, 5 → Output: false (Invalid)
*/