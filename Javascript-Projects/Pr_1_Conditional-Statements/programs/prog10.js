// Login authentication (role-based)

let username = 'Krishna';
let role = 'Guest';

if (username === '') {
    console.log('Username cannot be empty.');
} else {
    switch (role) {
        case 'Admin':
            console.log(`Welcome ${username}, ${role} have full access.`);
            break;
        case 'User':
            console.log(`Welcome ${username}, ${role} have limited access.`);
            break;
        case 'Guest':
            console.log(`Welcome ${username}, ${role} have read-only access.`);
            break;
        default:
            console.log('Invalid role. Access denied.');
    }
}
