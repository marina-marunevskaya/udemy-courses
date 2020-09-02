// book

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI
function UI () {}

UI.prototype.addBook = function (book) {
    const list = document.getElementById('book-list');

    // tr
    const tr = document.createElement('tr');

    // add tds
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(tr);
};

UI.prototype.resetForm = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

UI.prototype.showAlert = function (message, className) {
    const p = document.createElement('p');
    // add classes
    p.classList.add('alert');
    p.classList.add(className);

    // add text
    p.appendChild(
        document.createTextNode(message)
    );

    // get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // insert alert
    container.insertBefore(p, form);

    // hide alert after 3 seconds
    setTimeout(
        () => p.remove(),
        3000
    );
};

// event listeners
document.getElementById('book-form').addEventListener(
    'submit',
    function (event) {
        event.preventDefault();

        // form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        // book
        const book = new Book(title, author, isbn);

        // UI
        const ui = new UI();

        // validate
        if (title === '' || author === '' || isbn === '') {
            // error alert
            ui.showAlert('Please fill in all fields', 'error');
        } else {
            // add book to list
            ui.addBook(book);
    
            // clear fields
            ui.resetForm();

            // success alert
            ui.showAlert('The book was successfully added!', 'success');
        }
    }
);
