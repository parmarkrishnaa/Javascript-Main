class Person{
    constructor(){
        this.name = "John";
        this.age = 30;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class School extends Person{
    constructor(){
        super();
        this.school = "ABC High School";
        this.location = "New York";
        this.number = +1234567890;
        this.principal = "Mr. Smith";
    }

    getDetails(){
        super.greet();
        console.log(`School: ${this.school}, Location: ${this.location}, Contact: ${this.number}, Principal: ${this.principal}`);
    }
}

class Student extends School{
    constructor(){
        super();
        this.rollno = 11;
        this.grid = 1001;
        this.std = 12;
        this.section = "B";
        this.add = "123 Main St, New York, NY";
        this.contact = +919876543210;
        this.fees = 18000;
    }

    getInfo(){
        super.getDetails();
        console.log(`Roll No: ${this.rollno}, GR ID: ${this.grid}, Standard: ${this.std}, Section: ${this.section}, Address: ${this.add}, Contact: ${this.contact}, Fees: $${this.fees}`);
    }
}

let p = new Person();
let s = new School();
let st = new Student();

st.getInfo();