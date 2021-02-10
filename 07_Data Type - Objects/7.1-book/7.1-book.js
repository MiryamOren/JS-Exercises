const catsEye = {
  name: "Cat's Eye",
  author: 'Margaret Atwood',
  genre: 'Novel',
  publicationYear: 1988,
};

function bookDescription(book) {
  return `The book ${book.name} was written by ${book.author},
in the year ${book.publicationYear}.`;
}

console.log(bookDescription(catsEye));
