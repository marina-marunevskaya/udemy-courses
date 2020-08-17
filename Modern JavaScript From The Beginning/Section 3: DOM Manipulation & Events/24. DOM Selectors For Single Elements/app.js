// getElementById()
console.log(document.getElementById('task-title'));

// get something from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// change styling
document.getElementById('task-title').style.backgroundColor = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// change content
document.getElementById('task-title').textContent = 'Tasks List';
document.getElementById('task-title').innerText = 'Tasks';
document.getElementById('task-title').innerHTML = '<span style="color: red;">Tasks List</span>';

const taskTitle = document.getElementById('task-title');
taskTitle.innerHTML = '<span style="color: blue;">Tasks List</span>';

// querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'purple';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Item #4';
document.querySelector('li:nth-child(odd)').style.backgroundColor = '#ccc';
document.querySelector('li:nth-child(even)').style.backgroundColor = '#f4f4f4';
