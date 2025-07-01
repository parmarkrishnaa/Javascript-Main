let name = 'John Doe';
let rollno = 1;
let sub1 = 85, sub2 = 90, sub3 = 78;
let total = sub1 + sub2 + sub3;
let percentage = (total / 300) * 100;

if(percentage >= 33 && percentage <= 100){
    console.log(`   Student Marksheet:`);
    console.log(`Student Name:     ${name}`);
    console.log(`Student Roll No:  ${rollno}`);
    console.log(`Total Marks:      ${total}`);
    console.log(`Percentage:       ${percentage.toFixed(2)}%`);

    if(percentage >= 90){

        console.log("\nYour Grade is 'A+'.");
    }else if(percentage >= 80){
        console.log("\nYour Grade is 'A'.");
    }else if(percentage >= 70){
        console.log("\nYour Grade is 'B+'.");
    }else if(percentage >= 60){
        console.log("\nYour Grade is 'B'.");
    }else if(percentage >= 50){
        console.log("\nYour Grade is 'C'.");
    }else if(percentage >= 33){
        console.log("\nYour Grade is 'D'.");
    }else{
        console.log("\nYou are Fail. Please try again.");
    }
}else{
    console.log(`Enter percentage between 33 and 100.`);
}