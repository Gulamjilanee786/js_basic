/* VAR-01 Problem Specification
Objective:
(HH:MM:SS).
Slabs / Rules:
Convert and display a total number of seconds in standard digital clock format
If hours, minutes, or seconds are single digits, they must be padded with a leading zero
(e.g., 5 becomes '05').
Logical Hint:
Use division to find hours, and the remainder operator (%) to isolate remaining minutes
and seconds. Use .padStart().
Expected Case Scenario:
Input: 3665 → Output: '01:01:05'
*/


// let totalSeconds = 3665;

// let hours = Math.floor(totalSeconds / 3600);

// let minutes = Math.floor((totalSeconds % 3600) / 60);

// let seconds = totalSeconds % 60;

// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");
// seconds = String(seconds).padStart(2, "0");

// console.log(`${hours}:${minutes}:${seconds}`);

function convertToDigitalClock(totalSeconds) {

    let hours = Math.floor(totalSeconds / 3600);

    let minutes = Math.floor((totalSeconds % 3600) / 60);

    let seconds = totalSeconds % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    console.log(hours + ":" + minutes + ":" + seconds);
}

convertToDigitalClock(3665); // Output: '01:01:05'
convertToDigitalClock(3690); // Output: '01:01:30'