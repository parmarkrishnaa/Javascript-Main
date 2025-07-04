let empName = 'John Doe';
let empID = 11;
let empBasicSalary = 30000;
let HRA = empBasicSalary * 0.2;
let MA = empBasicSalary * 0.1;
let TA = empBasicSalary * 0.05;
let DA = empBasicSalary * 0.15;
let PF = empBasicSalary * 0.12;
let PT = empBasicSalary * 0.02;
let experience = 3;
let Bonus = 0;

if(experience >= 5 && empBasicSalary >= 50000){
    Bonus = empBasicSalary * 0.15;
}else if(experience >= 3 && empBasicSalary >= 30000){
    Bonus = empBasicSalary * 0.1;
}else if(experience >= 1.5 && empBasicSalary >= 20000){
    Bonus = empBasicSalary * 0.08;
}else{
    Bonus = empBasicSalary;
}

let grossSalary = empBasicSalary + HRA + MA + TA + DA + Bonus;
let netSalary = grossSalary - (PF + PT);

console.log(`   Employee Details:`);
console.log(`Employee Name:  ${empName}`);
console.log(`Employee ID:    ${empID}`);
console.log(`Basic Salary:   ${empBasicSalary}`);
console.log(`HRA:            ${HRA}`);
console.log(`MA:             ${MA}`);
console.log(`TA:             ${TA}`);
console.log(`DA:             ${DA}`);
console.log(`PF:             ${PF}`);
console.log(`PT:             ${PT}`);
console.log(`Gross Salary:   ${grossSalary}`);
console.log(`Net Salary:     ${netSalary}`);
console.log(`Bonus:          ${Bonus}`);
