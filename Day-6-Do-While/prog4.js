// 5. Sum of squares from 1 to 10

let sum = 0;
let i = 1;

do{
    sum = sum + (i * i);
    i++;
}while(i <= 10);

console.log(`Sum of squares from 1 to 10 is: `, sum, `.`);