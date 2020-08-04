// create arrays
const numbers = [5000, 400, 45, 47, 88, 13, 1, 2, 3, 4, 5, 6, 152, 147, 98];
const integers = new Array(22, 13, 45, 48, 59);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [1, 'Hello', true, undefined, null, false, { name: 'John' }, new Date()];

console.log(numbers);
console.log(integers);
console.log(fruit);
console.log(mixed);
console.log('---');

let value;

console.log(value);
console.log('---');

// get array length
value = numbers.length;

console.log(value);
console.log('---');

// check if is array
value = Array.isArray(numbers);

console.log(value);
console.log('---');

value = Array.isArray('Hello');

console.log(value);
console.log('---');

// get a single value
value = numbers[3];

console.log(value);
console.log('---');

value = numbers[0];

console.log(value);
console.log('---');

// insert into array
numbers[2] = 100;

console.log(numbers);
console.log('---');

// find index of value
value = numbers.indexOf(5);

console.log(value);
console.log('---');

// mutating arrays
// add to end
numbers.push(123);

console.log(numbers);
console.log('---');

// add to front
numbers.unshift(15);

console.log(numbers);
console.log('---');

// take from end
numbers.pop();

console.log(numbers);
console.log('---');

// take from from
numbers.shift();

console.log(numbers);
console.log('---');

// splice values
numbers.splice(2, 1);

console.log(numbers);
console.log('---');

numbers.splice(2, 3);

console.log(numbers);
console.log('---');

// reverse
numbers.reverse();

console.log(numbers);
console.log('---');

// concatenate arrays
value = numbers.concat(integers);

console.log(value);
console.log('---');

// sort arrays
value = fruit.sort();

console.log(value);
console.log('---');

value = numbers.sort();

console.log(value);
console.log('---');

// use compare function
value = numbers.sort(function(x, y) {
    return x - y;
});

console.log(value);
console.log('---');

// reverse sort
value = numbers.sort(function(x, y) {
    return y - x;
});

console.log(value);
console.log('---');

// find
function under50(number) {
    return number < 50;
}

value = numbers.find(under50);

console.log(value);
console.log('---');

function over50(number) {
    return number > 50;
}

value = numbers.find(over50);

console.log(value);
console.log('---');
