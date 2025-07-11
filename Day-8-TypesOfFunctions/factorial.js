const factorial = (n) => {
    let fact = 1;

    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;
};

console.log(`Factorial of 1 to 10:`,factorial(10));