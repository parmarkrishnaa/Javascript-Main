// Largest among three

let num1 = 10, num2 = 20, num3 = 5;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(`${num1} is largest among three.`);
    } else {
        console.log(`${num3} is largest among three.`);
    }
} else {
    if (num2 >= num3) {
        console.log(`${num2} is largest among three.`);
    } else {
        console.log(`${num3} is largest among three.`);
    }
}