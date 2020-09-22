function test (reg, string) {
    if (reg.test(string)) {
        console.log(`"${string}" matches "${reg.source}".`);
    } else {
        console.log(`"${string}" doesn't match "${reg.source}".`);
    }

    console.log('---');
}

let reg = /hello/; // literal characters
let string = 'Hello World';
let result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /hello/i;
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

// metacharacter symbols

reg = /^h/i; // must start with
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /d$/i; // must end with
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /^hello$/i;
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'Hello';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /^h.llo$/i; // . - any one character
string = 'H*llo';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /h*llo/i; // . - any character 0 or more times
string = 'Heeello';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /gre?a?y/i; // ? - an optional character
string = 'gray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'grey';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'griy';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'gry';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /gre?a?y\?/i; // escape characters
string = 'Gray?';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);
