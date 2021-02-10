/* eslint-disable */
const mycountry = {
  country: 'Israel',
  capital: 'Jerusalem',
  language: 'Hebrew',
  population: 9.3,
  neighbours: ['Egypt', 'Jordan', 'Syria', 'Lebanon'],
  describe() {
    console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language},
they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland() {
    this.isIsland = this.neighbours.length? true : false;
  },
};

mycountry.describe();
mycountry.checkIsland();
console.log(mycountry);
