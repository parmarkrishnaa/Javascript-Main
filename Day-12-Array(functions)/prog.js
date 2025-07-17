let items = ["apple","banana","cherry"];

console.log(`Original Array: `,items);

let strItems = items.toString();

console.log(`Array converted to string: `,strItems);

let strItems1 = items.at(2);

console.log(`At index no. 2: `,strItems1);

let items1 = ["dolphin","elephant","frog"];

let joinArray = items.concat(items1);

console.log(`Combining both arrays: `,joinArray);

let joinArray1 = joinArray.join(', ');

console.log(`Combining both arrays: `,joinArray1);