const readline = require('readline');

// Create interface for terminal input/output
const role = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

role.question("Enter your role (Admin/User): ", function (input) {
    input = input.trim();

    if (input === 'Admin') {
        console.log('Access granted to admin dashboard.');
    } else if (input === 'User') {
        console.log('Access granted to user dashboard.');
    } else {
        console.log('Access denied. Invalid role.');
    }

    role.close();
});
