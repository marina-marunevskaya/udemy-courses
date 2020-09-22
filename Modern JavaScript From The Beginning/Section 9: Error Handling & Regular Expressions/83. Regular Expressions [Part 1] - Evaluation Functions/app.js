let reg;

reg = /hello/;

console.log(reg);
console.log(reg.source);
console.log('---');

// exec() - returns a result in an array or null
const execResultWithMatch = reg.exec(
    'hello world'
);

console.log(execResultWithMatch);
console.log(execResultWithMatch[0]);
console.log(execResultWithMatch.index);
console.log(execResultWithMatch.input);
console.log('---');

const execResultWithNoMatch = reg.exec(
    'hi world'
);

console.log(execResultWithNoMatch);
console.log('---');

// test() - returns true or false
const testResultWithMatch = reg.test('hello');
console.log(testResultWithMatch);
console.log('---');

const testResultWithNoMatch = reg.test('Hello');
console.log(testResultWithNoMatch);
console.log('---');

reg = /hello/i; // i - case insensitive

console.log(reg.test('Hello'));
console.log('---');

reg = /hello/g; // g - global search

reg = /hello/i;

// match() - returns a result array or null
const matchString = 'Hello there';
const matchResultWithMatch = matchString.match(reg);
console.log(matchResultWithMatch);
console.log('---');

// search() - returns an index of the first match or -1
const searchString = 'Hello world';
const searchResultWithMatch = searchString.search(reg);
console.log(searchResultWithMatch);
console.log('---');

// replace() - returns a new string with some or all matches of a pattern
const replaceString = 'Hello there';
const replaceResult = replaceString.replace(reg, 'Hi');
console.log(replaceResult);
console.log('---');
