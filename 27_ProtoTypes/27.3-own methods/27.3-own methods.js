/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
/* eslint-disable no-useless-return */

Array.prototype.myFilter = function (callback) {
  const newArr = [];
  this.forEach((element) => {
    if (callback(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.myFilter(checkAdult)); // 32,33,40
console.log(ages.filter(checkAdult)); // 32,33,40

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
};
console.log(ages.myFind(checkAdult));
console.log(ages.find(checkAdult));
