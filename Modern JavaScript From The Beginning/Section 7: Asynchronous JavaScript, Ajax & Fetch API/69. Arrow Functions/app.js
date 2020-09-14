const sayHello = function () {
    console.log('Hello');
};

const getHello = function () {
    return 'Hello';
};

const sayHelloArrow = () => {
    console.log('Hello');
};

const sayHelloArrowCompact = () => console.log('Hello');

const getHelloArrow = () => 'Hello';

const getObjectHello = () => ({ message: 'Hello' });

const sayHelloToSomeone = (name) => `Hello ${name}`;
const sayHelloByName = name => `Hello ${name}`;
const sayHelloByFullName = (
    firstName,
    lastName
) => `Hello ${firstName} ${lastName}`;

const users = [
    'Nathan',
    'John',
    'Jackie',
    'Cole'
];

sayHello();
sayHelloArrow();
sayHelloArrowCompact();
console.log(getHello());
console.log(getHelloArrow());
console.log(getObjectHello());
console.log(sayHelloToSomeone('Kate'));
console.log(sayHelloByName('Kate'));
console.log(sayHelloByFullName('Kate', 'Smith'));

const nameLengths = users.map(function (name) {
    return name.length;
});

console.log(nameLengths);

const nameLengthsWithArrow = users.map(
    name => name.length
);

console.log(nameLengthsWithArrow);
