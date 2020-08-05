let value;

const today = new Date();
let birthday = new Date('9-10-1981');
const birthdayWithTime = new Date('9-10-1981 11:25:00');

value = today;

console.log(value);
console.log(typeof value);
console.log('---');

value = today.toString();

console.log(value);
console.log(typeof value);
console.log('---');

value = birthday;

console.log(value);
console.log('---');

value = birthdayWithTime;

console.log(value);
console.log('---');

birthday = new Date('September 10 1981');

value = birthday;

console.log(value);
console.log('---');

birthday = new Date('9/10/1981');

value = birthday;

console.log(value);
console.log('---');

value = today.getMonth();

console.log(value);
console.log('---');

value = today.getDate();

console.log(value);
console.log('---');

value = today.getDay();

console.log(value);
console.log('---');

value = today.getFullYear();

console.log(value);
console.log('---');

value = today.getHours();

console.log(value);
console.log('---');

value = today.getMinutes();

console.log(value);
console.log('---');

value = today.getSeconds();

console.log(value);
console.log('---');

value = today.getMilliseconds();

console.log(value);
console.log('---');

value = today.getTime();

console.log(value);
console.log('---');

birthday.setMonth(2);

console.log(birthday);
console.log('---');

birthday.setDate(12);

console.log(birthday);
console.log('---');

birthday.setFullYear(1989);

console.log(birthday);
console.log('---');

birthday.setHours(3);

console.log(birthday);
console.log('---');

birthday.setMinutes(36);

console.log(birthday);
console.log('---');

birthday.setSeconds(49);

console.log(birthday);
console.log('---');
