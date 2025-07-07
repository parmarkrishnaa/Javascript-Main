// Check leap year

let year = 1995;

if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
    console.log(`${year} year is leap year.`);
} else {
    console.log(`${year} year is not leap year.`);
}