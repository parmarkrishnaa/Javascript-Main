// 4. Sum of multiples of 5 from 1 to 50 (for loop)

let sum = 0;

for(let i = 1; i <= 50; i ++){
    if(i % 5 === 0){
        sum = sum + i;
    }
}

console.log(`Sum of multiples of 5 from 1 to 50 is `, sum, `.`);