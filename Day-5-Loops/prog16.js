// 16. Sum of numbers from 1 to n until sum > 50

let sum = 0;
let n = 1;

while (sum <= 50){
    sum = sum + n;
    n++;
}

console.log(`Sum of numbers from 1 to ${n} until sum > 50 is `, sum, `.`);