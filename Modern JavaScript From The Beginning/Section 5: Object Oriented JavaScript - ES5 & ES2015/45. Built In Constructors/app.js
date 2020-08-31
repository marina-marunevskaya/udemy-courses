// String
const nameOne = 'Jeff'; // primitive value
const nameTwo = new String('Jeff');

console.log(nameOne);
console.log(nameTwo);

// nameTwo.foo = 'bar';

console.log(typeof nameOne); // string
console.log(typeof nameTwo); // object

if (nameOne === 'Jeff') {
    console.log('yes');
} else {
    console.log('no');
}

if (nameTwo === 'Jeff') {
    console.log('yes');
} else {
    console.log('no');
}

if (nameTwo == 'Jeff') {
    console.log('yes');
} else {
    console.log('no');
}

// number
const numberOne = 5;
const numberTwo = new Number(5);

console.log(numberOne);
console.log(numberTwo);

console.log(typeof numberOne);
console.log(typeof numberTwo);

// boolean
const booleanOne = true;
const booleanTwo = new Boolean(true);

console.log(booleanOne);
console.log(booleanTwo);

console.log(typeof booleanOne);
console.log(typeof booleanTwo);

// function
const getSumOne = function (x, y) {
    return x + y;
};

console.log(getSumOne(1, 1));

const getSumTwo = new Function(
    'x',
    'y',
    'return x + y'
);
console.log(getSumTwo(1, 1));

// object
const objectOne = {
    name: 'John'
};

console.log(objectOne);

const objectTwo = new Object(
    {
        name: 'Jack'
    }
);

console.log(objectTwo);

// array
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = new Array(1, 2, 3, 4, 5);

console.log(arrayOne);
console.log(arrayTwo);

// regular expressions
const rEOne = /\w+/;
const rETwo = new RegExp('\\w+');

console.log(rEOne);
console.log(rETwo);
