// Find the avg of numbers

let sum = 0;
let avg;

for(let i = 1; i <= 25; i++){
    sum += i;
    avg = sum / i;
}

console.log(`Average of 1 to 25 numbers is`, (avg), `.`);