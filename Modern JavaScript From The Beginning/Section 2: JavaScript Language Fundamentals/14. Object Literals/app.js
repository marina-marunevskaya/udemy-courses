const person = {
    firstName: 'Josie',
    lastName: 'Jackson',
    age: 24,
    email: 'j.jackson@email.com',
    hobbies: ['music', 'tennis'],
    address: {
        city: 'London',
        state: 'KL'
    },
    getBirthYear: function() {
        return 2020 - this.age;
    }
};

let value;

value = person;

console.log(value);
console.log('---');

// get specific value
value = person.firstName;

console.log(value);
console.log('---');

value = person['firstName'];

console.log(value);
console.log('---');

value = person['lastName'];

console.log(value);
console.log('---');

value = person.age;

console.log(value);
console.log('---');

value = person.hobbies;

console.log(value);
console.log('---');

value = person.hobbies;

console.log(value);
console.log('---');

value = person.hobbies[1];

console.log(value);
console.log('---');

value = person.address.state;

console.log(value);
console.log('---');

value = person.address['city'];

console.log(value);
console.log('---');

value = person.getBirthYear();

console.log(value);
console.log('---');

const people = [
    {
        name: 'Steve',
        age: 15
    },
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Janie',
        age: 14
    },
    {
        name: 'Katie',
        age: 34
    }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
