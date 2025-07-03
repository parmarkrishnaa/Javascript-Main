// 3. Sum of odd numbers from 1 to 20 (while loop)

let sum = 0;
let i = 1;

while(i <= 20){
    if(i % 2 !== 0){
        sum = sum + i;
    }
    i++;
}

console.log(`Sum of odd numbers from 1 to 20 is `, sum, `.`);