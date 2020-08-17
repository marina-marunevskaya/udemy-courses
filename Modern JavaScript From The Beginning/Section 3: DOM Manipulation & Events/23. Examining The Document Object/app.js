let value;

value = document;

console.log(value);
console.log('---');

value = document.all;

console.log(value);
console.log('---');

value = document.all[0];

console.log(value);
console.log('---');

value = document.all[1];

console.log(value);
console.log('---');

value = document.all[2];

console.log(value);
console.log('---');

value = document.all.length;

console.log(value);
console.log('---');

value = document.head;

console.log(value);
console.log('---');

value = document.body;

console.log(value);
console.log('---');

value = document.doctype;

console.log(value);
console.log('---');

value = document.domain;

console.log(value);
console.log('---');

value = document.URL;

console.log(value);
console.log('---');

value = document.characterSet;

console.log(value);
console.log('---');

value = document.contentType;

console.log(value);
console.log('---');

value = document.forms;

console.log(value);
console.log('---');

value = document.forms[0];

console.log(value);
console.log('---');

value = document.forms[0].id;

console.log(value);
console.log('---');

value = document.forms[0].method;

console.log(value);
console.log('---');

value = document.forms[0].action;

console.log(value);
console.log('---');

value = document.links;

console.log(value);
console.log('---');

value = document.links[0];

console.log(value);
console.log('---');

value = document.links[0].id;

console.log(value);
console.log('---');

value = document.links[0].className;

console.log(value);
console.log('---');

value = document.links[0].classList;

console.log(value);
console.log('---');

value = document.links[0].classList[0];

console.log(value);
console.log('---');

value = document.images;

console.log(value);
console.log('---');

value = document.scripts;

console.log(value);
console.log('---');

value = document.scripts[2].getAttribute('src');

console.log(value);
console.log('---');

let scripts = document.scripts;

/* scripts.forEach(function (script) {
    console.log(script);
}); */

scripts = Array.from(scripts);

scripts.forEach(function (script) {
    console.log(script);
});
console.log('---');

scripts.forEach(function (script) {
    console.log(script.getAttribute('src'));
});
console.log('---');
