/*
VAR-07 Problem Specification
Objective:
Convert a large pool of raw days cleanly into equivalent counts of whole Years, Months,
and remaining Days.
Slabs / Rules:
30 days = 1 month.
Logical Hint:
Assume fixed standard chronological baselines: exactly 365 days = 1 year, and exactly
Perform successive division and remainder operations. Strip years first, then compute
months from the remainder, then remaining days.
Expected Case Scenario:
Input: 400 days → Output: 1 Year, 1 Month, and 5 Days
*/
function convertDays(totalDays) { 
    let years = Math.floor(totalDays / 365);

    let remainingDays = totalDays % 365;

    let months = Math.floor(remainingDays / 30);

    let days = remainingDays % 30;

    console.log(years + " Year, " + months + " Month, and " + days + " Days");  //
}

// Function Call
convertDays(400);