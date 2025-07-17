let employee = [
    {
        'id' : '002', 'name' : 'Chitt', 'role' : 'Full Stack Developer', 'salary' : '3,00,000',
    },
    {
        'id' : '003', 'name' : 'Krishna', 'role' : 'Front End Developer', 'salary' : '2,00,000',
    },
    {
        'id' : '004', 'name' : 'Ved', 'role' : 'Back End Developer', 'salary' : '4,00,000',
    },
    {
        'id' : '005', 'name' : 'Parth', 'role' : 'UI/UX Designer', 'salary' : '1,50,000',
    }
];

console.log(`Original Array List:`);
console.table(employee)

// ✅ push() - Add to end
employee.push(
    {
        'id' : '006', 'name' : 'Yash', 'role' : 'Full Stack Developer', 'salary' : '3,20,000',
    },
    {
        'id' : '007', 'name' : 'Anash', 'role' : 'Back End Developer', 'salary' : '5,20,000',
    }
)

// ✅ unshift() - Add to beginning
employee.unshift(
    {
        'id' : '001', 'name' : 'Shivam', 'role' : 'Flutter Developer', 'salary' : '4,00,000',
    }
)

console.log(`\nAdded employees:`)
console.table(employee)

// ✅ pop() - Remove last
let removedLast = employee.pop();
console.log(`\nEmployee removed from last:`);
console.table(removedLast);

// ✅ shift() - Remove first
let removedFirst = employee.shift();
console.log("\nRemoved First Employee:");
console.table(removedFirst);

// ✅ map() - Create array of names
let names = employee.map(emp => emp.name);
console.log("\nEmployee Names:");
console.log(names);

// ✅ filter() - Filter Full Stack Developers
let fullStackDevs = employee.filter(emp => emp.role === "Full Stack Developer");
console.log("\nFull Stack Developers:");
console.table(fullStackDevs);

// ✅ find() - Find employee by ID
let findById = employee.find(emp => emp.id === '004');
console.log("\nEmployee with ID 004:");
console.table(findById);

// ✅ findIndex() - Get index of employee
let index = employee.findIndex(emp => emp.name === 'Ved');
console.log("\nIndex of Ved:", index);

// ✅ some() - Is there any UI/UX Designer?
let hasDesigner = employee.some(emp => emp.role.includes("Designer"));
console.log("\nAny UI/UX Designer?:", hasDesigner);

// ✅ every() - Check if all have salary
let allHaveSalary = employee.every(emp => emp.salary !== '');
console.log("\nDo all employees have salary?:", allHaveSalary);

// ✅ reverse() - Reverse array
let reversed = [...employee].reverse();
console.log("\nReversed Array:");
console.table(reversed);

// ✅ includes() - Check if 'Krishna' is in names
console.log("\nIs Krishna an employee?:", names.includes("Krishna"));

// ✅ slice() - Get first 3 employees
let firstThree = employee.slice(0, 3);
console.log("\nFirst 3 Employees:");
console.table(firstThree);

// ✅ splice() - Remove one and insert one
employee.splice(2, 1, { 'id': '008', 'name': 'Dev', 'role': 'Data Analyst', 'salary': '2,80,000' });
console.log("\nAfter Splice (replace 3rd employee):");
console.table(employee);

// ✅ join() - Join names into a string
let joinedNames = names.join(', ');
console.log("\nJoined Names:", joinedNames);