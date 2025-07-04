// 4. Sum of multiples of 5 from 1 to 50

let sum = 0;
let i = 1;

do{
    if(i % 5 === 0){
        sum = sum + i;
    }
    i++;
}while(i <= 50);

console.log(`Sum of multiples of 5 from 1 to 50 is `, sum, `.`);