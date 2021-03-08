class Point {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  addToX(num) {
    this.x += num;
  }

  addToY(num) {
    this.y += num;
  }

  setX(num) {
    this.x = num;
  }

  setY(num) {
    this.y = num;
  }

  addPoint(point) {
    this.x += point.x;
    this.y += point.y;
  }

  isSame(point) {
    return this.x === point.x && this.y === point.y;
  }

  print() {
    console.log(`(${this.x}, ${this.y})`);
  }
}

const point1 = new Point(0, 0);
const point2 = new Point(1, 3);
