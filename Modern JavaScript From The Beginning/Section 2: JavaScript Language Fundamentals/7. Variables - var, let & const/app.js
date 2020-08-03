// var, let, const

var name = 'Jack Smith';
console.log(name);

name = 'Jackie Night';
console.log(name);

// init var
var greeting;
console.log(greeting);

greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
// can not start with number


// Multi word vars
var firstName = 'Jackie Doe'; // Camel case
var first_name = 'Jack Smithson'; // Underscore
var FirstName = 'Gina Jack'; // Pascal case
var firstname = 'Jack Steveson';

// LET
let person;
person = 'Jackie Andie';
console.log(person);

person = 'Jackie Night';
console.log(person);

// CONST
const human = 'Johnie';
console.log(human);
// human = 'Sarah'; // Can not reassign

// Have to assign a value
// const greet;

const pet = {
    age: 3,
    name: 'Steve'
};

pet.age = 2;
pet.name = 'Kit';

console.log(pet);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

// can not do
// numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);
