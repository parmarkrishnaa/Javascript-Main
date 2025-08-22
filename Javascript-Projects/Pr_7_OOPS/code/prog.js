class Animal {
    speak() {
        console.log(`This animal makes a sound:`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`The Dog Barks 🐶`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`The Cat Meows 🐱`);
    }
}

let animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => {
    animal.speak();
})