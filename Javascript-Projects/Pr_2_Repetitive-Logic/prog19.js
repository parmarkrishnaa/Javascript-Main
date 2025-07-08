// 19. Sum of numbers divisible by 4 but not 8 (1–50)

let sum = 0;

for(let i = 1; i <= 50; i++){
    if(i % 4 === 0 && i % 8 !== 0){
        sum = sum + i;
    }
}

console.log(`Sum of numbers divisible by 4 but not 8 (1-50) is `, sum, `.`);