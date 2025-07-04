let name = 'John Doe';
let id = 11;
let amount = 400000;
let experience = 4;

if(amount >= 500000 && experience >= 5){
    amount *= 0.07;
}else if(amount >= 300000 && experience >= 3){
    amount *= 0.05;
}else if(amount >= 200000 && experience >= 3){
    amount *= 0.042;
}else{
    amount *= 0.025;
}

console.log(`   Loan Details:`);
console.log(`Name:             ${name}`);
console.log(`ID:               ${id}`);
console.log(`Interest Amount:  ${amount}`);
console.log(`Interest Rate:    ${amount / 1000}%`);
console.log(`Total Amount:     ${amount + 400000}`);