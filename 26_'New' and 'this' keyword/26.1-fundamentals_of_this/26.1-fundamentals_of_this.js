// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
console.log(this);
// we will get window (the obj)

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
  name: 'Timmy',
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
// a. Error - Window.name is not defined or Window.name
// b.
const myObj2 = {
  name: 'Timmy',
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
myObj2.greet();

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
myFuncDec();
// Window

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};

myFuncArrow();
// Window

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const newP = document.createElement('p');
newP.innerHTML = 'click me';
newP.classList.add('element');
document.querySelector('body').appendChild(newP);
document.querySelector('.element').addEventListener('click', () => {
  console.log(this);
});
// a. Window
// b.
document.querySelector('.element').addEventListener('click', function () {
  console.log(this);
});
