let a = 10, b = 5;

const addition = (a, b) => {
    return a + b;
}

const subtraction = (a, b) => {
    return a - b;
}

const division = (a, b) => {
    return a / b;
}

const multiplication = (a, b) => {
    return a * b;
}

const modulus = (a, b) => {
    return a % b;
}

let choice = 3;

console.log(`Press 1 for addition.`);
console.log(`Press 2 for subtraction.`);
console.log(`Press 3 for division.`);
console.log(`Press 4 for multiplication.`);
console.log(`Press 5 for modulus.`);

console.log(`Enter your choice: `, choice);

switch(choice){
    case 1:
        console.log(`Addition of ${a} and ${b} is`,addition(a, b),`.`);
    break;
    case 2:
        console.log(`Subtraction of ${a} and ${b} is`,subtraction(a, b),`.`);
    break;
    case 3:
        console.log(`Division of ${a} and ${b} is`,division(a, b),`.`);
    break;
    case 4:
        console.log(`Multiplication of ${a} and ${b} is`,multiplication(a, b),`.`);
    break;
    case 5:
        console.log(`Modulus of ${a} and ${b} is`,modulus(a, b),`.`);
    break;
}