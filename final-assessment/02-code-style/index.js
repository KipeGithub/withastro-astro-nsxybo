const booksCollection = {};

function getBooks() {
  return booksCollection;
}

function getBookById(id) {
  const book = booksCollection[id];

  if (!book) {
    return null;
  }

  return book.id;
}

function saveBook(book) {
  booksCollection[book.id] = book;
}

saveBook({ id: 'book-1', name: 'Book 1' });
const myBooks = getBooks();
const myBook = getBookById('book-1');

console.log(myBooks);
console.log(myBook);
