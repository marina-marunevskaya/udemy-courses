// variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

function addTask (event) {
    event.preventDefault();

    if (!taskInput.value) {
        alert('Add a task');
        return;
    }

    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    link.href = '#';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);
    // apend li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = '';
}

function loadEventListeners () {
    // add task event
    form.addEventListener('submit', addTask);
}

// load all event listeners
loadEventListeners();
