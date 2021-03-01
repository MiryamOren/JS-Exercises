// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger"

const hero = {
  health: 5,
  power: 68,
  getStrength() {
    if (this.health <= 5) {
      return this.power - 10;
    }
    return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return 'I am stronger';
  }
  return 'You are stronger';
}

const getStrength1 = hero.getStrength.bind({ health: 10, power: 20 });
console.log(whoIsStronger(getStrength1));
