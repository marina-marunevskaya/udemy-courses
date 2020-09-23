function test (reg, string) {
    if (reg.test(string)) {
        console.log(`"${string}" matches "${reg.source}".`);
    } else {
        console.log(`"${string}" doesn't match "${reg.source}".`);
    }

    console.log('---');
}

// shorthand character classes

let reg = /\w/; // word character - alphanumeric or _
let string = '3x3x3x';
let result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /\w+/; // + - one or more
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = '!';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /\W/; // non-word characters
string = ' ';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /\d/; // any digit
string = '3';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /\d+/;
string = '3145588';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /\D/; // non-digit character
string = 'word';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /\s/; // any whitespace character
string = ' ';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /\S/; // non-whitespace character
string = 'word';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /Wel/i;
string = 'Welcome to Wel';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /Wel\b/i; // word boundary
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

// assertions
reg = /x(?=y)/; // match x only if it is followed by y
string = 'x';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'foxy';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /x(?!y)/; // match x only if it is not followed by y
string = 'xd';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);
