/*
OP-01 Problem Specification
Objective:
conditions.
Slabs / Rules:
Determine whether a student passes or fails an academic term based on multiple core
The student must score at least 40 or higher in all 3 individual subjects, AND the
collective average across all three must be 50 or higher.
Logical Hint:
Combine comparison expressions safely using logical AND (&&) operators. Calculate
individual rules before evaluation.
Expected Case Scenario:
Input: [42, 45, 70] → Output: true (Passed) | Input: [38, 90, 90] → Output: false
(Failed individual subject)
*/