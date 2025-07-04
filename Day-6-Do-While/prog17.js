// 18. Sum of cubes of 1 to 5

let sum = 0;
let i = 1;

do{
    sum = sum + (i * i * i);
    i++;
}while(i <= 5);

console.log(`Sum of cubes of numbers from 1 to 5 is `, sum, `.`);