// Sample data
const people = [
    { name: 'Alice', role: 'Employee' },
    { name: 'Bob', role: 'Enrolled Member' },
    { name: 'Charlie', role: 'Subscriber' },
    { name: 'David', role: 'Non-Subscriber' },
    { name: 'Eve', role: 'Guest' } // Example of unrecognized role
];

// Checking access for each person based on their role
people.forEach(person => {
    if (person.role === 'Employee') {
        console.log(`${person.name} has full access to "Dietary Services".`);
    } else if (person.role === 'Enrolled Member') {
        console.log(`${person.name} has access to "Dietary Services" and one-on-one interaction with a dietician.`);
    } else if (person.role === 'Subscriber') {
        console.log(`${person.name} has partial access to "Dietary Services".`);
    } else if (person.role === 'Non-Subscriber') {
        console.log(`${person.name} needs to enroll or subscribe to access "Dietary Services".`);
    } else {
        console.log(`${person.name} has an unrecognized role.`);
    }
});