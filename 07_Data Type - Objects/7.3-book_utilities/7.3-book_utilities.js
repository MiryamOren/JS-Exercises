const catsEye = {
  name: "Cat's Eye",
  author: 'Margaret Atwood',
  publicationYear: 1988,
};

const aWizardOfEarthsea = {
  name: 'A Wizard of Earthsea',
  author: 'Ursula K. Le Guin',
  publicationYear: 1968,
};

const bookUtils = {
  getFirstPublished(book1, book2) {
    return book1.publicationYear < book2.publicationYear ? book1 : book2;
  },
  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translator) {
    book.translation = {
      language,
      translator,
    };
  },
  setPublisher(book, name, location) {
    book.publisher = {
      name,
      location,
    };
  },
  isSamePublisher(book1, book2) {
    return !!(
      book1.publisher.name === book2.publisher.name &&
      book1.publisher.location === book2.publisher.location
    );
  },
};

bookUtils.setPublisher(aWizardOfEarthsea, 'Parnassus Press', 'United States');
bookUtils.setPublisher(catsEye, 'McClelland and Stewart', 'Canada');
console.log(aWizardOfEarthsea, catsEye);
console.log(bookUtils.isSamePublisher(aWizardOfEarthsea, catsEye));
