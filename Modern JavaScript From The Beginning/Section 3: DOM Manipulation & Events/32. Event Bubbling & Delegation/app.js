// event bubbling
document.querySelector('.card-title').addEventListener(
    'click',
    () => console.log('card-title')
);

document.querySelector('.card-content').addEventListener(
    'click',
    () => console.log('card-content')
);

document.querySelector('.card').addEventListener(
    'click',
    () => console.log('card')
);

document.querySelector('.col').addEventListener(
    'click',
    () => console.log('col')
);

// event delegation
function deleteItem (event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
        event.target.parentElement.parentElement.remove();
    }
}

document.body.addEventListener('click', deleteItem);
