// replace an element

// create an element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old newHeading
const oldHeading = document.getElementById('task-title');

// parent
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading, oldHeading);

// remove an element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove a list item
lis[0].remove();

// remove a child element
list.removeChild(lis[2]);

// classes & attributes
// classes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;

value = link.className;
console.log(value);
console.log('---');

value = link.classList;
console.log(value);
console.log('---');

value = link.classList[0];
console.log(value);
console.log('---');

link.classList.add('test');
value = link;
console.log(value);
console.log('---');

link.classList.remove('test');
value = link;
console.log(value);
console.log('---');

// attributes
value = link.getAttribute('href');
console.log(value);
console.log('---');

link.setAttribute('href', 'https://google.com');
value = link.getAttribute('href');
console.log(value);
console.log('---');

value = link.hasAttribute('href');
console.log(value);
console.log('---');

value = link.hasAttribute('title');
console.log(value);
console.log('---');

link.setAttribute('title', 'Google');
value = link.hasAttribute('title');
console.log(value);
console.log('---');

link.removeAttribute('title');
value = link.hasAttribute('title');
console.log(value);
console.log('---');
