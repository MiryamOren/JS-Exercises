function graterThan10(num) {
  return new Promise(function (myResolve, myReject) {
    if (num > 10) {
      myResolve('Grater Than 10');
    } else {
      myReject('Error: Smaller than 10');
    }
  });
}
const myPromise = graterThan10(8);

myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
