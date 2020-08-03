// primitive types

// string
const name = 'Jack Martin';

console.log(typeof name);

// number, no quotes
const age = 18;

console.log(typeof age);

// boolean, no quotes
const hasPhone = true;

console.log(typeof hasPhone);

// null
const computer = null;

console.log(typeof computer); // object (!)

// undefined
let company;

console.log(typeof company);

// symbol
const car = Symbol();

console.log(typeof car);

// reference types - objects

// array
const hobbies = ['Singing', 'Travelling', 'Sport'];

console.log(typeof hobbies);

// object literal
const address = {
    city: 'Boston',
    state: 'MA'
};

console.log(typeof address);

// date
const today = new Date();

console.log(today);
console.log(typeof today);
