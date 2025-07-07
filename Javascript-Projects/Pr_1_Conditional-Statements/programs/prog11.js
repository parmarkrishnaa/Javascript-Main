// Triangle type based on sides

let a = 2, b = 2, c = 2;

if (a <= 0 || b <= 0 || c <= 0) {
    console.log(`Invalid Side Lengths.`);
} else if (a + b <= c || b + c <= a || c + a <= b) {
    console.log(`This not a Triangle.`);
} else if (a === b && b === c) {
    console.log(`Triangle is Equilateral because all sides are equal.`);
} else if (a === b || b === c || c === a) {
    console.log(`Triangle is Isosceles because exact two sides are equal.`);
} else {
    console.log(`Triangle is Scalene.`);
}