let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value = listItem;
console.log(value);
console.log('---');

value = list;
console.log(value);
console.log('---');

// get child nodes - NodeList
value = list.childNodes;
console.log(value);
console.log('---');

value = list.childNodes[0];
console.log(value);
console.log('---');

value = list.childNodes[0].nodeName;
console.log(value);
console.log('---');
console.log('---');

value = list.childNodes[0].nodeType; // 3
console.log(value);
console.log('---');
console.log('---');

value = list.childNodes[1].nodeType; // 1
console.log(value);
console.log('---');

// node type
// 1 - element
// 2 - attribute (deprecated)
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype

// get children element nodes - HTMLCollection
value = list.children;
console.log(value);
console.log('---');

value = list.children[0];
console.log(value);
console.log('---');

value = list.children[1];
console.log(value);
console.log('---');

list.children[1].textContent = 'Hello';

// childre of children
value = list.children[3].children;
console.log(value);
console.log('---');

value = list.children[3].children[0];
console.log(value);
console.log('---');

list.children[3].children[0].id = 'remove-button';

// first child
value = list.firstChild;
console.log(value);
console.log('---');

value = list.firstElementChild;
console.log(value);
console.log('---');

// last child
value = list.lastChild;
console.log(value);
console.log('---');

value = list.lastElementChild;
console.log(value);
console.log('---');

// count child elements
value = list.childElementCount;
console.log(value);
console.log('---');

// get parent node
value = listItem.parentNode;
console.log(value);
console.log('---');

value = listItem.parentElement;
console.log(value);
console.log('---');

value = listItem.parentElement.parentElement;
console.log(value);
console.log('---');

// get next sibling
value = listItem.nextSibling;
console.log(value);
console.log('---');

value = listItem.nextElementSibling;
console.log(value);
console.log('---');

value = listItem.nextElementSibling.nextElementSibling;
console.log(value);
console.log('---');

// get previous sibling
value = listItem.previousSibling;
console.log(value);
console.log('---');

value = listItem.previousElementSibling;
console.log(value);
console.log('---');

value = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(value);
console.log('---');
