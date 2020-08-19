document.querySelector('.clear-tasks').addEventListener(
    'click',
    function (event) {
        event.preventDefault();
        console.log('Click');
    }
);

function onClick (event) {
    event.preventDefault();
    console.log('Clicked');

    let value = event;
    console.log(value);
    console.log('---');

    // event target element
    value = event.target;
    console.log(value);
    console.log('---');

    value = event.target.id;
    console.log(value);
    console.log('---');

    value = event.target.className;
    console.log(value);
    console.log('---');

    value = event.target.classList;
    console.log(value);
    console.log('---');

    event.target.innerText = 'Click';

    // event type
    value = event.type;
    console.log(value);
    console.log('---');

    // timestamp
    value = event.timeStamp;
    console.log(value);
    console.log('---');

    // coordinates relative to the window
    value = event.clientY;
    console.log(value);
    console.log('---');

    value = event.clientX;
    console.log(value);
    console.log('---');

    // coordinates relative to the element
    value = event.offsetY;
    console.log(value);
    console.log('---');

    value = event.offsetX;
    console.log(value);
    console.log('---');
}

document.querySelector('.clear-tasks').addEventListener(
    'click',
    onClick
);
