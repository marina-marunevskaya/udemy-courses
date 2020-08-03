// type conversion

let value;

// number to string
value = 3; // number

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = String(3); // string
value = String(4 + 4); // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

// boolean to string
value = true; // boolean

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = String(true); // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

// date to string
value = new Date(); // date

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = String(new Date()); // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

// array to string
value = [1, 2, 3, 4]; // array

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = String([1, 2, 3, 4]); // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

// toString
value = (5).toString(); // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = (true).toString(); // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

// string to number
value = '5'; // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = Number('5'); // number

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed(2));

console.log('---');

// boolean to number
value = true; // boolean

// output
console.log(value);
console.log(typeof value);

console.log('---');

value = Number(true); // number

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed(2));

console.log('---');

value = false; // boolean

// output
console.log(value);
console.log(typeof value);

console.log('---');

value = Number(false); // number

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed(2));

console.log('---');

// null to number
value = null; // boolean

// output
console.log(value);
console.log(typeof value);

console.log('---');

value = Number(null); // number

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed(2));

console.log('---');

// string to number
value = 'hello'; // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = Number('hello'); // number - NaN - not a number

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed(2));

console.log('---');

// array to number
value = [1, 2, 3, 4, 5]; // array

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = Number([1, 2, 3, 4, 5]); // number - NaN - not a number

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed(2));

console.log('---');

// parseInt
value = '123456'; // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = parseInt('123456'); // number

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed());

console.log('---');

value = '100.15'; // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = parseInt('100.15'); // number - 100

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed());

console.log('---');

// parseFloat
value = '100.15'; // string

// output
console.log(value);
console.log(typeof value);
console.log(value.length);

console.log('---');

value = parseFloat('100.15'); // number

// output
console.log(value);
console.log(typeof value);
console.log(value.toFixed(4));

console.log('---');

// type coersion
const firstValue = 5;
const secondValue = 6;
const sum = firstValue + secondValue;

// output
console.log(sum);
console.log(typeof sum);

console.log('---');

const thirdValue = '12';
const anotherSum = thirdValue + secondValue;

// output
console.log(anotherSum);
console.log(typeof anotherSum);

console.log('---');
