// 8. Sum of all prime numbers from 1 to 50

let i = 2;
let sum = 0;

do {
    let j = 2;

    do {
        if (i % j === 0) {
            break;
        }
        j++;
    } while (j < i);

    if (i === j) {
        sum = sum + i;
    }
    i++;
} while (i <= 50);


console.log(`Sum of all prime numbers from 1 to 50 is `, sum, `.`);