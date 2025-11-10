const books = [
];


let filteredBooks = [...books];


function renderBooks() {
const list = document.getElementById('book-list');
list.innerHTML = '';
if (filteredBooks.length === 0) {
list.innerHTML = '<p class="no-books">No books found.</p>';
return;
}


filteredBooks.forEach((book) => {
const item = document.createElement('div');
item.className = 'book-card';
item.innerHTML = `
<div>
<h3>${book.title}</h3>
<p>${book.author}</p>
</div>
<button class="remove-btn" onclick="removeBook(${book.id})">Remove</button>
`;
list.appendChild(item);
});
}


function addBook() {
const title = document.getElementById('title').value.trim();
const author = document.getElementById('author').value.trim();
if (!title || !author) return;


const newBook = { id: Date.now(), title, author };
books.push(newBook);
filteredBooks = [...books];
renderBooks();


document.getElementById('title').value = '';
document.getElementById('author').value = '';
}


function removeBook(id) {
const index = books.findIndex((b) => b.id === id);
if (index !== -1) {
books.splice(index, 1);
}
filteredBooks = [...books];
renderBooks();
}


function searchBooks() {
const query = document.getElementById('search').value.toLowerCase();
filteredBooks = books.filter(
(book) =>
book.title.toLowerCase().includes(query) ||
book.author.toLowerCase().includes(query)
);
renderBooks();
}


document.addEventListener('DOMContentLoaded', () => {
renderBooks();
});
