let num = 10;

const mainFunction = () => {
    num  = 20;

    const innerFunction = () => {
        num = 30;
        
        const subFunction = () => {
            let num = 40;

            console.log(`Sub value of num: `, num);
        }
        console.log(`Inner value of num: `, num);
        subFunction();
    }
    console.log(`Main value of num: `, num);
    innerFunction();
}
console.log(`Outer value of num: `, num);
mainFunction();