// 2. Sum of even numbers from 1 to 20 (for loop)

let sum = 0;

for(let i = 1; i <= 20; i ++){
    if(i % 2 === 0){
        sum = sum + i;
    }
}

console.log(`Sum of even numbers from 1 to 20 is `, sum, `.`);