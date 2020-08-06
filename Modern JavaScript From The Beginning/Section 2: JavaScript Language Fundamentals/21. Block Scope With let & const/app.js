// Global scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global scope:', a, b, c);
console.log('---');

function test () {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Function scope:', a, b, c);
}

test();
console.log('Global scope:', a, b, c);
console.log('---');

if (true) {
    // Block scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If scope:', a, b, c);
}

console.log('Global scope:', a, b, c);
console.log('---');

for (let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global scope:', a, b, c);
console.log('---');

for (var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global scope:', a, b, c);
console.log('---');
