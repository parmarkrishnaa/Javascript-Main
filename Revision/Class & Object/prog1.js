class Obj1{
    constructor(){
        this.name = "John";
        this.dept = "CSE";
        this.company = "Microsoft";
    }

    getInfo(){
        console.log(`Name: ${this.name},\nDepartment: ${this.dept},\nCompany: ${this.company},`);
    }
}

class Obj2 extends Obj1{
    constructor(){
        super();
        
        this.location = "USA";
        this.salary = "10,00,00,000";
    }
    
    getInfo(){
        super.getInfo();
        console.log(`Location: ${this.location},\nSalary: ${this.salary}`);
    }
}

let o = new Obj2();

o.getInfo();