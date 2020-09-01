const personPrototypes = {
    greeting: function () {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    },
    mary: function (newLastName) {
        this.lastName = newLastName;
    }
};

const john = Object.create(personPrototypes);
john.firstName = 'John';
john.lastName = 'Williams';
john.age = 28;

console.log(john);
console.log(john.greeting());

const vicky = Object.create(personPrototypes);
vicky.firstName = 'Vicky';
vicky.lastName = 'Smith';

console.log(vicky.greeting());
vicky.mary('Thomson');
console.log(vicky.greeting());

const jack = Object.create(personPrototypes, {
    firstName: {
        value: 'Jack'
    },
    lastName: {
        value: 'Garten'
    },
    age: {
        value: 18
    }
});

console.log(jack);
console.log(jack.greeting());
