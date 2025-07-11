const isPrime = (num) => {
    if(num <= 1) return false;

    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}

let num = 8;
console.log(`Is ${num} prime`, isPrime(num));