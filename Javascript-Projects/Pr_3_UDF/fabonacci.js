const printFabonacci = (terms) => {
    let a = 0;
    let b = 1;
    let c;

    console.log(a);
    console.log(b);

    for(let i = 3; i < terms; i++){
        c = a + b;

        console.log(c);

        a = b;
        b = c;
    }
};

printFabonacci(20);