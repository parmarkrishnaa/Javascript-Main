// Parking fee system

let vehicleType = 'Bicycle';
let hours = 5;
let fee = 0;

if (hours <= 0) {
    console.log(`Invalid numbers of hours!!!`);
} else {
    switch (vehicleType) {
        case 'Car':
            fee = 40 + (hours - 1) * 40;
            break;
        case 'Bike':
            fee = 30 + (hours - 1) * 30;
            break;
        case 'Moped':
            fee = 20 + (hours - 1) * 20;
            break;
        case 'Bicycle':
            fee = 10 + (hours - 1) * 10;
            break;
    }

    if (fee > 0) {
        console.log(`Vehicle Type: ${vehicleType}`);
        console.log(`Hours Packed: ${hours}`);
        console.log(`Total Fee: ${fee}`);
    }
}