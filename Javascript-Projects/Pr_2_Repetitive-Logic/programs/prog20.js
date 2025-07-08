//  20. Sum of alternate numbers (1, 3, 5... to 19)

let sum = 0;

for(let i = 1; i <= 19; i += 2){
    sum = sum + i;
}

console.log(`Sum of alternate numbers (1, 3, 5... to 19) is `, sum, `.`);