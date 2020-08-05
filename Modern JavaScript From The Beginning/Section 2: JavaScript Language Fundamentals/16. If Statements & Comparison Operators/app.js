const id = 100;

// equal to
if (id == 100) {
    console.log('correct');
    console.log('---');
}

if (id == 101) {
    console.log('correct');
    console.log('---');
} else {
    console.log('incorrect');
    console.log('---');
}

// not equal to
if (id != 101) {
    console.log('correct');
    console.log('---');
} else {
    console.log('incorrect');
    console.log('---');
}

const stringId = '100';

if (stringId == 100) {
    console.log('correct');
    console.log('---');
} else {
    console.log('incorrect');
    console.log('---');
}

// equal to value & type
if (stringId === 100) {
    console.log('correct');
    console.log('---');
} else {
    console.log('incorrect');
    console.log('---');
}

if (id === 100) {
    console.log('correct');
    console.log('---');
} else {
    console.log('incorrect');
    console.log('---');
}

// not equal to value & type
if (id !== 100) {
    console.log('correct');
    console.log('---');
} else {
    console.log('incorrect');
    console.log('---');
}

if (stringId !== 100) {
    console.log('correct');
    console.log('---');
} else {
    console.log('incorrect');
    console.log('---');
}

if (id) {
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

// test if undefined
if (typeof id !== undefined) {
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

// greater or less than
if (id > 200) {
    console.log('correct');
} else {
    console.log('incorrect');
}

if (id >= 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

if (id < 200) {
    console.log('correct');
} else {
    console.log('incorrect');
}

if (id <= 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// if else
const color = 'red';

if (color === 'red') {
    console.log('Color is red');
} else if (color === 'blue') {
    console.log('Color is blue');
}

const anotherColor = 'blue';

if (anotherColor === 'red') {
    console.log('Color is red');
} else if (anotherColor === 'blue') {
    console.log('Color is blue');
}

const thirdColor = 'yellow';

if (thirdColor === 'red') {
    console.log('Color is red');
} else if (thirdColor === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}

// logical operators

const name = 'Jackie';
const age = 21;


// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child.`);
} else if (age >= 12 && age <= 19) {
    console.log(`${name} is a teenager.`)
} else {
    console.log(`${name} is an adult.`);
}

// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`)
}

// ternary operator
console.log(
    id === 100 ? 'correct' : 'incorrect'
);

// without braces
if (id === 100)
    console.log('correct');
else
    console.log('incorrect');
