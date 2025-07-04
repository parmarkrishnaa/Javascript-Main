// 16. Sum of numbers from 1 to n until sum > 50

let sum = 0;
let n = 1;
let i = 1;

do{
    sum = sum + i;
    i++;
}while(sum <= 50);

console.log(`Sum of numbers from 1 to ${n} until sum > 50 is `, sum, `.`);