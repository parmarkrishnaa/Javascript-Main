//  20. Sum of alternate numbers (1, 3, 5... to 19)

let sum = 0;
let i = 1;

do{
    sum = sum + i;
    i += 2;
}while(i <= 19);

console.log(`Sum of alternate numbers from 1 to 19 is `, sum, `.`);