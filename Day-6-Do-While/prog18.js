// 19. Sum of numbers divisible by 4 but not 8 (1–50)

let sum = 0;
let i = 1;

do{
    if(i % 4 === 0 && i % 8 !== 0){
        sum = sum + i;
    }
    i++;
}while(i <= 50);

console.log(`Sum of numbers divisible by 4 but not 8 (1-50) is `, sum, `.`);