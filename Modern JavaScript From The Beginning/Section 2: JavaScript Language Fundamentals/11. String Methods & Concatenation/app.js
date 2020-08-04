const firstName = 'Jack';
const lastName = 'Smith';
const age = 19;
const splittableString = 'Hello World my name is Jack';
const tags = 'web design, web development, programming';

let value;

console.log(value);
console.log('---');

value = firstName + lastName;

console.log(value);
console.log('---');

// concatenation
value = firstName + ' ' + lastName;

console.log(value);
console.log('---');

// append
value = 'Josie ';
value += 'Johnson';

console.log(value);
console.log('---');

value = 'Hello, my name is ' + firstName + ' and I am ' + age;

console.log(value);
console.log('---');

// escaping
value = "That's awesome, I can't wait";

console.log(value);
console.log('---');

value = 'That\'s awesome, I can\'t wait';

console.log(value);
console.log('---');

// length
value = firstName.length;

console.log(value);
console.log('---');

// concat()
value = firstName.concat(' ', lastName);

console.log(value);
console.log('---');

// change case
value = firstName.toUpperCase();

console.log(value);
console.log('---');

value = firstName.toLowerCase();

console.log(value);
console.log('---');

value = firstName[0];

console.log(value);
console.log('---');

// indexOf()
value = firstName.indexOf('c');

console.log(value);
console.log('---');

value = firstName.lastIndexOf('c');

console.log(value);
console.log('---');

// charAt()
value = firstName.charAt('2');

console.log(value);
console.log('---');

// get last character
value = firstName.charAt(firstName.length - 1);

console.log(value);
console.log('---');

// substring()
value = firstName.substring(0, 2);

console.log(value);
console.log('---');

// slice
value = firstName.slice(0, 1);

console.log(value);
console.log('---');

value = firstName.slice(0, -2);

console.log(value);
console.log('---');

// split()
value = splittableString.split(' ');

console.log(value);
console.log('---');

value = tags.split(',');

console.log(value);
console.log('---');

// replace()
value = splittableString.replace('Jack', 'Tim');

console.log(value);
console.log('---');

// includes()
value = splittableString.includes('Hello');

console.log(value);
console.log('---');

value = splittableString.includes('hey');

console.log(value);
console.log('---');
