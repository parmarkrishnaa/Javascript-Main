let num = 10;

const mainFunction = () => {
    num = 20;

    const innerFunction = () => {
        num = 30;

        const subFunction = () => {
            num = 40;

            const subFunction2 = () => {
                let num = 50;

                console.log(`Curret value of num: `, num)
            }
            subFunction2();
            console.log(`Sub2 value of num: `, num);
        }
        subFunction();
        console.log(`Sub value of num: `, num);
    }
    innerFunction();
    console.log(`Main value of num: `, num);
}
mainFunction();
console.log(`Outer value of num: `, num);