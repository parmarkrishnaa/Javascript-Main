// 14. Sum of factorial numbers 1! + 2! + 3! + ... + 5!

let sum = 0;
let i = 1;

do{
    let fact = 1;
    let j = 1;
    do{
        fact = fact * j;
        j++;
    }while(j <= i)
    i++;

    sum = sum + fact;
}while(i <= 5);

console.log(`Sum of factorial numbers from 1 to 5 is `, sum, `.`);