// 15. Sum of all numbers ending with digit 7 (1–100)

let sum = 0;

for(let i = 1; i <= 100; i++){
    if(i % 10 === 7){
        sum = sum + i;
    }
}

console.log(`Sum of all numbers ending with digit 7 from 1 to 100 is `, sum, `.`);