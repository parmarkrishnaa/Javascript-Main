// 11. Sum of odd numbers between 100 and 150

let sum = 0;
let i = 101;

while(i <= 150){
    if(i % 2 !== 0){
        sum = sum + i;
    }
    i++;
}

console.log(`Sum of odd numbers between 100 and 150 is `, sum, `.`);