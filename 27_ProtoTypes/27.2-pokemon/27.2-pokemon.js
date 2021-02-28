function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const Bulbasaur = new Pokemon('Bulbasaur', 'Grass', [
  'Absorb',
  'Accelerock',
  'Acid',
  'Acid Armor',
]);
const Ivysaur = new Pokemon('Ivysaur', 'Poison', [
  'Acid Downpour',
  'Acid Spray',
  'Acrobatics',
  'Acupressure',
]);
const Charmander = new Pokemon('Charmander', 'Fire', [
  'Aerial Ace',
  'Aeroblast',
  'Air Cutter',
]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};
Pokemon.prototype.attack = function (num) {
  console.log(`${this.name} used ${this.attackList[num]}`);
};
