function test (reg, string) {
    if (reg.test(string)) {
        console.log(`"${string}" matches "${reg.source}".`);
    } else {
        console.log(`"${string}" doesn't match "${reg.source}".`);
    }

    console.log('---');
}

// [] - character sets

let reg = /gr[ae]y/i; // must be an a or e
let string = 'Gray';
let result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'Grey';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'Gry';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /[GF]ray/; // must be a G or F
string = 'Gray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'Fray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'Xray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'gray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /[^GF]ray/; // match anything except a G or F
string = 'Xray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /[A-Z]ray/; // any uppercase letter
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'gray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /[a-z]ray/; // any lowercase letter
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /[A-Za-z]ray/; // any letter
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'Xray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /[0-9]ray/; // any digit
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = '1ray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = '100ray';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /[0-9][0-9]ray/;
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

// {} - quantifiers
reg = /hel{2}o/i; // must occur exactly {m} times
string = 'Hello';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = 'Helo';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /hel{2,4}o/i;
string = 'Helllo';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /hel{2,}o/i; // at least {m,} times
string = 'Helllllllllllllo';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

// () - groupping
reg = /([0-9]x){3}/;
string = '3x9x4x5x';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

reg = /^([0-9]x){3}$/;
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);

string = '3x9x4x';
result = reg.exec(string);
console.log(result);
console.log('---');
test(reg, string);
