// 6. Sum of digits of a number

let num = 12345;
let sum = 0;
let temp;

while(num > 0){
    temp = num % 10;
    sum = sum + temp;
    sum = sum + (temp / 10);
}

console.log(`Sum of digits of the number is `, sum, `.`);