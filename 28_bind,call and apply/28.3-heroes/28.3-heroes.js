const wonderWoman = {
  name: 'Diana Prince',
};

const batman = {
  name: 'Bruce Wayne',
};
const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
  heroes.forEach((hero) => {
    const print = printFunc.bind(hero);
    print();
  });
}

console.log(printHeroes(superHeroes, printName));
