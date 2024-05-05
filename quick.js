const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Jim", age: 15 },
    { name: "Joan", age: 20 }
];

const adults = people.filter(person => 
    {
        return person.age >= 18
    });

console.log(adults); 