// 17. Sum of numbers between 10 and 30 not divisible by 2 or 3

let sum = 0;
let i = 10;

do{
    if(i % 2 !== 0 && i % 3 !== 0){
        sum = sum + i;
    }
    i++;
}while(i <= 30);

console.log(`Sum of numbers between 10 and 30 not divisible by 2 or 3 is `, sum, `.`);