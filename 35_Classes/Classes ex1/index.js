class Animel {
  constructor(_name, _sound) {
    this.name = _name;
    this.sound = _sound;
  }

  getName() {
    return this.name;
  }

  getSound() {
    return this.sound;
  }

  print() {
    console.log(`I'm a ${this.name}! ${this.sound}!`);
  }
}

const cat = new Animel('Cat', 'meow');
const bee = new Animel('Bee', 'buzz');
const geese = new Animel('Geese', 'quack');
