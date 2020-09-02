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
}

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

        // add book to list
        ui.addBook(book);

        // clear fields
        ui.resetForm();
    }
);
