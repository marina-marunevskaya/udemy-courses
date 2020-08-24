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

function deleteTask (event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            event.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks () {
    if (confirm('Are you sure?')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
}

function filterTasks (event) {
    const value = event.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        task => {
            const item = task.firstChild.textContent.toLowerCase();

            if (value && item.indexOf(value) !== -1) {
                task.classList.add('blue');
            } else {
                task.classList.remove('blue');
            }
        }
    );
}

function loadEventListeners () {
    // add task event
    form.addEventListener('submit', addTask);

    // delete task event
    taskList.addEventListener('click', deleteTask);

    // clear tasks event
    clearButton.addEventListener('click', clearTasks);

    // filter tasks event
    filter.addEventListener('input', filterTasks);
}

// load all event listeners
loadEventListeners();
