/* VAR-04 Problem Specification
Objective:
(DOB) string.
Slabs / Rules:
Calculate a person's exact current age dynamically given their complete Date of Birth
Your logic must accurately account for whether the individual's birthday has already
happened or has yet to happen in the current calendar year.
Logical Hint:
Instantiating 'new Date()' gives you access to the modern system calendar. Compare
years, then adjust based on months and days.
Expected Case Scenario:
Input: '1995-12-15' (Assuming current date is June 2026) → Output: 30 (Since Dec
15 hasn't occurred yet in 2026) */

function calculateAge(dob) {

    let birthDate = new Date(dob);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
         currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

let result = calculateAge("1995-12-15");

console.log("Current Age:", result);