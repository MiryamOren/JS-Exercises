// Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.
const nums = [1, 2, 3, 4, 5];

function doubleValues(arr) {
  return arr.map((element) => element * 2);
}

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

function onlyEvenValues(arr) {
  const newArr = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      newArr.push(element);
    }
  });
  return newArr;
}

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

function showFirstAndLast(arr) {
  const newArr = [];
  if (typeof arr[0] === 'string') {
    newArr.push(arr[0]);
  }
  if (typeof arr[arr.length - 1] === 'string') {
    newArr.push(arr[arr.length - 1]);
  }
  return newArr;
}

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive

function vowelCount(str) {
  const lettersOccurrences = {};
  str.split('').forEach((letter) => {
    const Lowerletter = letter.toLowerCase();
    if (lettersOccurrences[Lowerletter]) {
      lettersOccurrences[Lowerletter] += 1;
    } else {
      lettersOccurrences[Lowerletter] = 1;
    }
  });
  return lettersOccurrences;
}

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capitalize(str) {
  return str.toUpperCase();
}

// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one

function shiftLetters(str) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let newStr = '';
  str.split('').forEach((letter) => {
    let index = alphabet.indexOf(letter) - 1;
    if (index === -1) {
      index = alphabet.length - 1;
    }
    newStr += alphabet[index];
  });
  return newStr;
}

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

function swapCase(str) {
  let newStr = '';
  str.split(' ').forEach((word) => {
    if (str.split(' ').indexOf(word) % 2 === 0) {
      newStr += `${word.toUpperCase()} `;
    } else {
      newStr += `${word} `;
    }
  });
  return newStr;
}
