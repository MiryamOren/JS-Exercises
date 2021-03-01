const person = {
  name: 'Miryam Oren',
  printName() {
    console.log(this.name);
  },
  printNameDelay() {
    setTimeout(this.printName.call(this), 1000);
  },
};
