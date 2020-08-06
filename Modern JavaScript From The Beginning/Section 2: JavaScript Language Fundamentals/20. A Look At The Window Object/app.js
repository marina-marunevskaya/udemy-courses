// window methods / objects / properties
// console.log
window.console.log(123);
console.log(123);

// alert
window.alert('Hello world!');
alert('Hello world!');

// prompt
const input = prompt();
alert(`Your input is '${input}'`);

// confirm
if (confirm('Are you sure?')) {
    console.log('Confirmed');
} else {
    console.log('Declined');
}

console.log('---');

let value;

console.log(value);

// outer height and width
value = window.outerHeight;
console.log(value);

value = window.outerWidth;
console.log(value);

// inner height and width
value = window.innerHeight;
console.log(value);

value = window.innerWidth;
console.log(value);

// scroll points
value = window.scrollY;
console.log(value);

value = window.scrollX;
console.log(value);

console.log('---');

// location object
value = window.location;
console.log(value);

value = window.location.hostname;
console.log(value);

value = window.location.port;
console.log(value);

value = window.location.href;
console.log(value);

value = window.location.search;
console.log(value);

// redirect
// window.location.href = window.location.href;

// reload
// window.location.reload();

// history object
// window.history.go(-1);

value = window.history.length;
console.log(value);

// navigator object
value = window.navigator;
console.log(value);

value = window.navigator.appName;
console.log(value);

value = window.navigator.appVersion;
console.log(value);

value = window.navigator.userAgent;
console.log(value);

value = window.navigator.platform;
console.log(value);

value = window.navigator.vendor;
console.log(value);

value = window.navigator.language;
console.log(value);
