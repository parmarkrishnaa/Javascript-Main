// Fabonacci Series

let a, b = 0, c = 1;
let str = ' ';

for(let i = 1; i <= 10; i++){
    a = b;
    b = c;
    c = a + b;
    str += a + ' ';
}

console.log(`Fabonacci Series:`, str)