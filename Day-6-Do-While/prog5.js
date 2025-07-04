//  6. Sum of digits of a number

let num = 12345;
let sum = 0;
let temp = 0;

do{
    temp = num % 10;
    sum = sum + temp;
    num = parseInt(num / 10); 

}while(num > 0);

console.log(`Sum of digits of the number is `, sum, `.`);