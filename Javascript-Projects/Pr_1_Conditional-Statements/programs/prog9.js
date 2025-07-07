// Speed check

let speed = 75;

if (speed <= 0) {
    console.log("Invalid speed.");
}
else if (speed <= 40) {
    console.log("Too slow, speed up!");
}
else if (speed <= 60) {
    console.log("Speed is safe.");
}
else if (speed <= 80) {
    console.log("Caution! You are slightly over the safe limit.");
}
else if (speed <= 100) {
    console.log("Over-speeding! Slow down.");
}
else {
    console.log("Danger! You are driving too fast!");
}
