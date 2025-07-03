// 8. Sum of all prime numbers from 1 to 50

let sum = 0;

for (let i = 1; i <= 50; i++) {
    for (let j = 2; j <= i; j++) {
        if (i % j === 0) {
            if (i === j) {
                sum = sum + i;
            } else {
                break;
            }
        } else {
            continue;
        }
    }
}

console.log(`Sum of all prime numbers from 1 to 50 is `, sum, `.`);