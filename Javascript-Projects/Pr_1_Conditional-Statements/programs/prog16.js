// Electricity bill slab

let unit = 400;

if (unit <= 50) {
    console.log(`Bill: Rs.`, unit * 1);
} else if (unit <= 100) {
    console.log(`Bill: Rs.`, unit * 2);
} else if (unit <= 150) {
    console.log(`Bill: Rs.`, unit * 3);
} else if (unit <= 200) {
    console.log(`Bill: Rs.`, unit * 4);
} else if (unit <= 250) {
    console.log(`Bill: Rs.`, unit * 5);
} else {
    console.log(`Bill: Rs.`, unit * 6);
}