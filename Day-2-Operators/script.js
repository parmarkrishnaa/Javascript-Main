// Operators:

// Arithmetic Operators(+, -, /, *, %, **)

let a = 10, b = 5;

console.log(`Arithmetic Operators:`);
console.log(a, `+`, b, `=`, a + b);
console.log(a, `-`, b, `=`, a - b);
console.log(a, `/`, b, `=`, a / b);
console.log(a, `*`, b, `=`, a * b);
console.log(a, `%`, b, `=`, a % b);
console.log(a, `^`, b, `=`, a ** b);

// Comparison Operators(==, !=, <, <=, >, >=, ===, !==)

let d = 20, e = "20";

console.log(`\nComparison Operators:`)
console.log(d == e);
console.log(d != e);
console.log(d < e);
console.log(d <= e);
console.log(d > e);
console.log(d >= e);
console.log(d === e);
console.log(d !== e);

// Logical Operators(&&, ||, !)

let f = 15, g = 20;

console.log(`\nLogical Operators:`)
console.log(f <= 18 && g >= 15);
console.log(f <= 10 || g >= 15);
console.log(f <= 10 && g >= 15);