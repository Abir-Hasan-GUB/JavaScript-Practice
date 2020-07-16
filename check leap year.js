// function to check leap year 

function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
       return (year + " is leap year...");
    } 
    // else if (year % 400 == 0) {
    //     console.log(year + " is leap year...");
    // }
     else {
        return (year + " is not leap year...");
    }
}
var year = checkLeapYear(2023);
console.log(year);