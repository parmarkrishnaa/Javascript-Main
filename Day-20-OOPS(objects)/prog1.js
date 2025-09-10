let stud = {
    name: `Ved`,
    age: 16,
    prof: `Developer`,
    displayStud() {
        console.log(`${this.name} ${this.age} ${this.prof}`);
    }
}

let stud1 = {
    name: `Krishna`,
    age: 18,
    prof: `Developer`,
}

stud1.__proto__ = stud;

stud1.displayStud();