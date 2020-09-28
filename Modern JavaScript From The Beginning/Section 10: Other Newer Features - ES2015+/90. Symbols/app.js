const firstSymbol = Symbol();
const secondSymbol = Symbol('secondSymbol');

console.log(firstSymbol);
console.log(secondSymbol);
console.log(typeof firstSymbol);

console.log(Symbol() === Symbol());
console.log(Symbol('id') === Symbol('id'));
console.log(`Hello ${String(firstSymbol)}`);
console.log(`Hello ${firstSymbol.toString()}`);
console.log('---');

// unique object keys
const FIRST_KEY = Symbol();
const SECOND_KEY = Symbol('SECOND_KEY');

const firstObject = {};
firstObject[FIRST_KEY] = 'firstProperty';
firstObject[SECOND_KEY] = 'secondProperty';
firstObject['THIRD_KEY'] = 'thirdProperty';

console.log(firstObject[FIRST_KEY]);
console.log(firstObject[SECOND_KEY]);

console.log('---');

// symbols are not enumerable
for (let i in firstObject) {
    console.log(`${i}: ${firstObject[i]}`);
}

// symbols are ignored by JSON.stringify()
console.log(JSON.stringify({
    key: 'value'
}));

console.log(JSON.stringify({
    key: 'value',
    [Symbol('firstKey')]: 'symbolValue'
}));
