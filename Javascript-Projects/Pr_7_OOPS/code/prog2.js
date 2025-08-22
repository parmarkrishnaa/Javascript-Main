class Car {
    drive() {
        console.log(`Car is driving 🚗.`);
    }
}

class Bike {
    drive() {
        console.log(`Bike is driving 🏍.`);
    }
}

function start(vehicle) {
    vehicle.drive();
}

start(new Car());
start(new Bike());