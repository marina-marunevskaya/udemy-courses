// destructuring assignment
let a, b;
[a, b] = [100, 200];

console.log(a);
console.log(b);

let c, d, e;
[c, d, ...e] = [100, 200, 300, 400, 500];
console.log(c);
console.log(d);
console.log(e);

let f, g, h;

({ f, g, ...h } = { f: 100, g: 600, a: 300} );

console.log(f);
console.log(g);
console.log(h);

// array destructuring
const people = ['John', 'Jack', 'Sofia', 'Steve'];

const [person1, person2, person3, person4] = people;
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log('---');

// parse array returned from a function
function getPeople () {
    return ['Kate', 'Jack', 'Mary'];
}

let human1, human2, human3;
[human1, human2, human3] = getPeople();
console.log(human1);
console.log(human2);
console.log(human3);
console.log('---');

// object destructuring
const person = {
    name: 'Elly',
    age: 19,
    city: 'London',
    gender: 'female',
    sayHello: function () {
        console.log('Hello');
    }
};

// ES5
const nameES5 = person.name;
const ageES5 = person.age;
const cityES5 = person.city;

// ES6 destructuring
const { name, age, city, sayHello } = person;
console.log(name);
console.log(age);
console.log(city);
sayHello();
