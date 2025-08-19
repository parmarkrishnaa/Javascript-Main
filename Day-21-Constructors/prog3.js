class Employee{
    constructor(eid, ename, edept){
        this.eid = eid
        this.ename = ename;
        this.edept = edept;
    }
};

let emp = new Employee(101, "Krishna", "Development");

console.log(`Id: `, emp.eid, `\nName: `, emp.ename, `\nDepartment: `, emp.edept);