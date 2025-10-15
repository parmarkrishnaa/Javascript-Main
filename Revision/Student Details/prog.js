class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class School extends Person {
    constructor(name, age, school, location, number, principal, std, fees) {
        super(name, age);
        this.school = school;
        this.location = location;
        this.number = number;
        this.principal = principal;
        this.std = std;
        this.fees = fees;
    }

    getDetails() {
        super.greet();
        console.log(`I am studying in ${this.school} located at ${this.location}. The fees of ${this.std} is ${this.fees}. The principal of the school is ${this.principal}. You can contact the school from this given number ${this.number}.`);
    }
}

class Student extends School {
    constructor(name, age, school, location, number, principal, rollno, grid, std, section, add, contact) {
        super(name, age, school, location, number, principal);
        this.rollno = rollno;
        this.grid = grid;
        this.std = std;
        this.section = section;
        this.add = add;
        this.contact = contact;
    }

    getInfo() {
        super.getDetails();
        console.log(`My roll no. is ${this.rollno} and my grid is ${this.grid}. I am currently studying in ${this.std} standard and my section is ${this.section}. I am from ${this.add}. You can contact me on this number ${this.contact}.`);
    }
}

let st = new Student("John", 30, "ABC High School", "New York", +1234567890, "Mr. Smith", 11, 1001, 12, "B", 18000, "123 Main St New York", +919876543210);

st.getInfo();