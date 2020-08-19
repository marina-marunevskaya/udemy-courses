const clearButton = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// event handlers
function runEvent (event) {
    console.log(`EVENT TYPE: ${event.type}`);

    heading.textContent = `MouseX: ${event.offsetX}, MouseY: ${event.offsetY}`;

    document.body.style.backgroundColor = `rgb(${event.offsetX % 255}, ${event.offsetY % 255}, ${(event.offsetX + event.offsetY) % 255})`;
}

// event listeners
// click
clearButton.addEventListener('click', runEvent);
// double click
clearButton.addEventListener('dblclick', runEvent);
// mouse down
clearButton.addEventListener('mousedown', runEvent);
// mouse up
clearButton.addEventListener('mouseup', runEvent);
// mouse enter
card.addEventListener('mouseenter', runEvent);
// mouse leave
card.addEventListener('mouseleave', runEvent);
// mouse over - internal elements
card.addEventListener('mouseover', runEvent);
// mouse out - internal elements
card.addEventListener('mouseout', runEvent);
// mouse move
card.addEventListener('mousemove', runEvent);
