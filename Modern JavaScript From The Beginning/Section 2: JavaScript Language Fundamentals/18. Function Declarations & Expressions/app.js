// function declarations

function greet() {
    console.log('Hello');
}

greet();

function newGreet() {
    return 'Hello';
}

newGreet();
console.log(newGreet());

function greetPerson(firstName) {
    return `Hello, ${firstName}`;
}

console.log(greetPerson('Jessie'));

function greetPersonByFullName(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greetPersonByFullName('Jessie', 'Smithson'));
console.log(greetPersonByFullName());

function greetPersonByFullNameWithES5(firstName, lastName) {
    if (typeof firstName === 'undefined') {
        firstName = 'John';
    }

    if (typeof lastName === 'undefined') {
        lastName = 'Smith';
    }

    return `Hello, ${firstName} ${lastName}`;
}

console.log(greetPersonByFullNameWithES5());

function greetPersonByFullNameWithES6(firstName = 'Jackie', lastName = 'Smith') {
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greetPersonByFullNameWithES6());
console.log(greetPersonByFullNameWithES6('Mazie'));

// function expressions

const square = function (number = 13) {
    return number * number;
};

console.log(square(7));
console.log(square());

// immediately invoked function expressions - IIFE
(function() {
    console.log('IIFE');
})();

(function(name) {
    console.log(`Hello ${name}`);
})('Katie');

// property methods

const todo = {
    add: function () {
        console.log('Add TODO');
    },
    edit: function (id) {
        console.log(`Edit TODO #${id}`);
    }
};

todo.delete = function () {
    console.log('Delete TODO');
};

todo.add();
todo.edit(13);
todo.delete();
