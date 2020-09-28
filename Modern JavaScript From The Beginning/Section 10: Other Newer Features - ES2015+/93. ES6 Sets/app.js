// Sets - store unique values of any type
const firstSet = new Set();

// add values to set
firstSet.add(100);
firstSet.add('a string');
firstSet.add({name: 'Katy'});
firstSet.add(true);
firstSet.add(100);

console.log(firstSet);
console.log('---');

const secondSet = new Set([1, true, 'string', 14]);
console.log(secondSet);
console.log('---');

// get set size
console.log(firstSet.size);
console.log('---');

// check values
console.log(firstSet.has(100));
console.log(firstSet.has(50 + 50));
console.log(firstSet.has({name: 'Katy'}));
console.log('---');

// delete from set
firstSet.delete(100);
console.log(firstSet);
console.log('---');

// iterate sets
// for...of
console.log('for...of');
for (let item of firstSet) {
    console.log(item);
}
console.log('---');

for (let item of firstSet.keys()) {
    console.log(item);
}
console.log('---');

for (let item of firstSet.values()) {
    console.log(item);
}
console.log('---');

for (let item of firstSet.entries()) {
    console.log(item);
}
console.log('---');

// forEach
firstSet.forEach(
    (value) => {
        console.log(value);
    }
);
console.log('---');

// convert to array
const setArray = Array.from(firstSet);
console.log(setArray);
console.log('---');
