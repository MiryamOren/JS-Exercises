class Car {
  constructor(_brand, _speed) {
    this.brand = _brand;
    this.speed = _speed;
  }

  getBrand() {
    return this.brand;
  }

  getSpeed() {
    return this.speed;
  }

  print() {
    console.log(`brand: ${this.brand}\nspeed: ${this.speed}`);
  }

  etSpeed(s) {
    this.speed = s;
  }
}

const cars = [
  new Car('mazda', 180),
  new Car('hyundai', 200),
  new Car('mitsubishi', 190),
  new Car('ford', 210),
];

function maxSpeed(currentMax, currentCar) {
  if (currentCar.getSpeed() > currentMax.getSpeed()) {
    currentMax = currentCar;
  }
  return currentMax;
}

console.log(cars.reduce(maxSpeed));

function compare(a, b) {
  // a is less than b by some ordering criterion
  if (a.getSpeed() < b.getSpeed()) {
    return -1;
  }
  // a is greater than b by the ordering criterion
  if (a.getSpeed() > b.getSpeed()) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

console.log(cars.sort(compare));
