// Temperature condition

let temp = 25;

if (temp < 0) {
    console.log(`${temp} Temperature is Freezing.`);
} else if (temp < 15) {
    console.log(`${temp} Temperature is Cold.`);
} else if (temp < 25) {
    console.log(`${temp} Temperature is Warm.`);
} else {
    console.log(`${temp} Temperature is Hot.`);
}