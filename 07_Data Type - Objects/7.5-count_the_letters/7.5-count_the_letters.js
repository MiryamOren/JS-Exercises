const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];

function occurrencesOfLetters(arr) {
  const str = arr.join('').split(' ').join('').toLowerCase();
  console.log(str);
  const occurrences = {};

  let i;
  for (i = 0; i < str.length; i++) {
    const letter = str[i];
    if (occurrences[letter]) {
      occurrences[letter] += 1;
    } else {
      occurrences[letter] = 1;
    }
  }

  return occurrences;
}

console.log(occurrencesOfLetters(array));
