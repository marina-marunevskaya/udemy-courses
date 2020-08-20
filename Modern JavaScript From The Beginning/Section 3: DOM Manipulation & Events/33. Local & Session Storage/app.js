// set local storage item
localStorage.setItem('name', 'John');

// set session storage item
sessionStorage.setItem('name', 'Jackie');

// remove from storage
localStorage.removeItem('name');

// set local storage item
localStorage.setItem('fullname', 'John Smith');

// get from storage
const name = localStorage.getItem('fullname');
console.log(name);

localStorage.setItem('age', '12');

const age = localStorage.getItem('age');
console.log(age);

// clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener(
    'submit',
    function (event) {
        event.preventDefault();

        let tasks = [];

        if ('tasks' in localStorage) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        const task = document.getElementById('task').value;
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
);

const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

tasks.forEach(
    task => console.log(task)
);
