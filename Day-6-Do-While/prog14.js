//  15. Sum of all numbers ending with digit 7 (1–100)

let sum = 0;
let i = 1;

do{
    if(i % 10 === 7){
        sum = sum + i;
    }
    i++;
}while(i <= 100);

console.log("Sum of all numbers ending with digit 7 from 1 to 100 is: " + sum, `.`);