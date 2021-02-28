function printSuperPower() {
  console.log(`my superpower is ${this.superPower}`);
}

const storm = {
  superPower: 'flying',
  print: printSuperPower,
};

storm.print();
