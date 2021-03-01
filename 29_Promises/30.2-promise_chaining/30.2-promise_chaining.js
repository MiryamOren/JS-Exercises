function makeAllCaps(arr) {
  let problem = false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      problem = true;
      break;
    }
    arr[i] = arr[i].toUpperCase();
  }
  return new Promise(function (resolve, reject) {
    if (!problem) {
      resolve(arr);
    } else {
      reject(new Error('Error'));
    }
  });
}

function sortWords(arr) {
  arr.sort();
  if (true) return Promise.resolve(arr);
}

const arr1 = ['hello', 'from', 'the', 'other', 'side'];
const arr2 = ['hello', 'from', 'the', 'other', 'side', 5];
makeAllCaps(arr1)
  .then(sortWords)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

makeAllCaps(arr2)
  .then(sortWords)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
