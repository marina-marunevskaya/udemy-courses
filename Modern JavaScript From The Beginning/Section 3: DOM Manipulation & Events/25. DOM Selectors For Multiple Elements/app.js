// getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Item #4';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// getElementsByTagName
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[1].style.color = 'blue';
lis[2].textContent = 'Hello';

// lis.reverse();

console.log(lis);

// HTML Collection to array
const lisArray = Array.from(lis);
lisArray.reverse();

console.log(lisArray);

lisArray.forEach(
    function (li, index) {
        console.log(li);
        console.log(li.className);
        li.textContent = `${index}: Hello`;
    }
);

// querySelectorAll
const queryItems = document.querySelectorAll('ul.collection li.collection-item');
console.log(queryItems);

queryItems.forEach(
    function (item, index) {
        item.textContent = `${index}: Hello`;
    }
);

const lisOdd = document.querySelectorAll('li:nth-child(odd)');
const lisEven = document.querySelectorAll('li:nth-child(even)');

lisOdd.forEach(
    function (li) {
        li.style.backgroundColor = '#ccc';
    }
);

for (let i = 0; i < lisEven.length; i++) {
    lisEven[i].style.backgroundColor = '#f4f4f4';
}
