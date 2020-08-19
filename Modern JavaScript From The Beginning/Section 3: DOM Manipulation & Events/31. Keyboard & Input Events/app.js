const form = document.querySelector('form');
const input = document.getElementById('task');
const heading = document.querySelector('h5');

// clear input
input.value = '';

function runEvent (event) {
    event.preventDefault();

    console.log(`EVENT TYPE: ${event.type}`);
    console.log(input.value);
}

form.addEventListener(
    'submit',
    runEvent
);

// key down
input.addEventListener('keydown', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
    console.log(event.target.value);
    heading.innerText = event.target.value;
});

// key up
input.addEventListener('keyup', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
    console.log(event.target.value);
    heading.innerText = event.target.value;
});

// key press
input.addEventListener('keypress', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
    console.log(event.target.value);
    heading.innerText = event.target.value;
});

// focus
input.addEventListener('focus', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
});

// blur
input.addEventListener('blur', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
});

// cut
input.addEventListener('cut', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
});

// paste
input.addEventListener('paste', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
});

// input
input.addEventListener('input', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
});

// change
input.addEventListener('change', function (event) {
    console.log(`EVENT TYPE: ${event.type}`);
});
