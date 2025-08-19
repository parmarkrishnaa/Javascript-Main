class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive() {
        console.log(`Driving the ${this.year} ${this.make} ${this.model}.`);
    }
};

let myCar = new Car("Ford", "Mustang", 2023);

myCar.drive();