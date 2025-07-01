let name = 'John Doe';
let rollno = 1;
let sub1 = 85, sub2 = 9, sub3 = 78;
let total = sub1 + sub2 + sub3;

console.log(`   Student Marksheet:`);

if(sub1 <= 33 || sub2 <= 33 || sub3 <= 33){
    console.log(`Total Marks: ${total}`);
    console.log(`Name: ${name} and Roll No: ${rollno} \nHas failed in one or more subjects.`);
}else{
    console.log(`Total Marks: ${total}`);
    console.log(`Name: ${name} and Roll No: ${rollno} \nHas passed in all subjects.`);
}