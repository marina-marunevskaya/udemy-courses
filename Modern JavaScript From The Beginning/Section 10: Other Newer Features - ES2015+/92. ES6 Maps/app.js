// Maps = key-value pairs - any type can be used as a key or value
const firstMap = new Map();

// set keys
const stringKey = 'stringKey';
const objectKey = {};
const functionKey = function () {};

// set values by key
firstMap.set(stringKey, 'value of stringKey');
firstMap.set(objectKey, 'value of objectKey');
firstMap.set(functionKey, 'value of functionKey');

console.log(firstMap.get(stringKey));
console.log(firstMap.get(objectKey));
console.log(firstMap.get(functionKey));

// count values
console.log(firstMap.size);
console.log('---');

// iterating maps
// for ... of
for (let [ key, value ] of firstMap) {
    console.log(`${key}: ${value}`);
}

console.log('---');

// iterate keys only
for (let key of firstMap.keys()) {
    console.log(key);
}

console.log('---');

// iterate values only
for (let value of firstMap.values()) {
    console.log(value);
}

console.log('---');

// forEach
firstMap.forEach(
    function (value, key) {
        console.log(`${key}: ${value}`);
    }
);

console.log('---');

// convert to array
// array of key-value pairs
const keyValueArray = Array.from(firstMap);
console.log(keyValueArray);
console.log('---');

// array of values
const valueArray = Array.from(firstMap.values());
console.log(valueArray);
console.log('---');

// array of keys
const keyArray = Array.from(firstMap.keys());
console.log(keyArray);
console.log('---');
