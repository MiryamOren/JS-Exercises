//  Array of words
const foods = ['falafel', 'sabich', 'hummus', 'pizza with extra pineapple'];

foods.sort();
console.log(foods);
foods.reverse();
console.log(foods);

// Lets sort an array of words that includes a word with an uppercase
const foodsWithUpperCase = [
  'falafel',
  'Sabich',
  'hummus',
  'pizza with extra pineapple',
];

foodsWithUpperCase.sort(function (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(foodsWithUpperCase);
foodsWithUpperCase.reverse();
console.log(foodsWithUpperCase);

// Longest word
const words = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];
words.sort(function (a, b) {
  return b.length - a.length;
});
console.log(words);
