// 7. Sum of numbers divisible by both 3 and 7 (1-100)

let sum = 0;
let i = 1;

do{
    if(i % 3 === 0 && i % 7 === 0){
        sum = sum + i;
    }
    i++;
}while(i <= 100);

console.log(`Sum of numbers divisible by both 3 and 7 (1-100) is: `, sum, `.`);