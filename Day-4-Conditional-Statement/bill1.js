let name = 'John Doe';
let amount = 2000;
let discount = 0;

if(amount >= 5000){
    discount = amount * 0.15;
}else if(amount >= 3000){
    discount = amount * 0.1;
}else{
    discount = amount * 0.05;
}

console.log(`   Bill Details:`);
console.log(`Name:            ${name}`);
console.log(`Amount:          ${amount}`);
console.log(`Discount:        ${discount}`);
console.log(`Total Amount:    ${amount - discount}`);