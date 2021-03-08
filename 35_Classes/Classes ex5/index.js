/* eslint-disable max-classes-per-file */
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

class PointWorld {
  constructor() {
    this.points = [];
  }

  addPoint(point) {
    this.points.push(point);
  }

  getSortedPoints() {
    return this.points.sort((p1, p2) => p1.y - p2.y);
  }

  getPointsWithoutDuplicates() {
    const res = new Set(this.points);
    return Array.from(res);
  }

  getSumOfX() {
    return this.points.reduce((sum, el) => sum + el.x, 0);
  }

  isPoint(point) {
    if (this.points.indexOf(point) >= 0) {
      return true;
    }
    return false;
  }
}

const point1 = new Point(0, 0);
const point2 = new Point(1, 3);

const pointsArr = new PointWorld();
pointsArr.addPoint(point2);
pointsArr.addPoint(point1);
pointsArr.addPoint(point1);
