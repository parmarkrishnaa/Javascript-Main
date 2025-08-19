class Person{
    constructor(sname, rollno, std){
        this.sname = sname;
        this.rollno = rollno;
        this.std = std;
    }

    display(){
        console.log(`I, ${this.sname}. My roll number is ${this.rollno}. I'm studying in ${this.school} in ${this.std}.`)
    }
}

class Stud extends Person{
    constructor(sname, rollno, school, std){
        super(sname, rollno, std);
        this.school = school;
    }
}

let student = new Stud("Krishna", 10, "AB", 12);

student.display();