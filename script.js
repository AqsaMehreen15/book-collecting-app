
function fetchBooks() {
    fetch('http://localhost:5000/books')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('bookList');
            bookList.innerHTML = '';
            data.forEach(book => {
                const li = document.createElement('li');
                li.textContent = `${book.title} by ${book.author}`;
                bookList.appendChild(li);
            });
        });
}

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    if (title && author) {
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author }),
        }).then(() => {
            fetchBooks();
            document.getElementById('bookTitle').value = '';
            document.getElementById('bookAuthor').value = '';
        });
    }
}

fetchBooks();
