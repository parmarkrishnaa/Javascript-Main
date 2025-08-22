function greet(name, age) {
    if (age === undefined) {
        console.log(`Hello ${name}`);
    } else {
        console.log(`Hello ${name}, you are ${age} years old`);
    }
}

greet(`Dhaval`);
greet(`Dhaval`, 250000000000000);