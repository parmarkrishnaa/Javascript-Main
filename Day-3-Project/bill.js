let product_name = 'Laptop';
let product_price = 75000;
let product_quantity = 5;
let total = product_price * product_quantity;
let discount = total * 0.2;
let netTotal = total - discount;

console.log(`    Product Details:`);
console.log(`Product Name:      ${product_name}`);
console.log(`Product Price:     ${product_price}`);
console.log(`Product Quantity:  ${product_quantity}`);
console.log(`Total:             ${total}`);
console.log(`Discount:          ${discount}`);
console.log(`Net Total:         ${netTotal}`);