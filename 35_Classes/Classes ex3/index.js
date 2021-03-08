class SortNumber {
  constructor() {
    this.numList = [];
  }

  addNum(num) {
    if (num === 1 || num === 0) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    if (this.numList.includes(num)) {
      return false;
    }
    this.numList.push(num);
    this.numList.sort((a, b) => a - b);
    return true;
  }

  removeNum(num) {
    if (this.numList.includes(num)) {
      this.numList.splice(this.numList.indexOf(num), 1);
      return true;
    }
    return false;
  }

  getAll() {
    return this.numList;
  }

  print() {
    console.log(this.numList);
  }

  share(arr) {
    const set1 = new Set(this.numList);
    const set2 = new Set(arr.numList);
    const intersection = new Set([...set1].filter((x) => set2.has(x)));
    // let res = Array.from(intersection);
    return intersection.size;
  }

  union(arr) {
    const set1 = new Set(this.numList);
    const set2 = new Set(arr.numList);
    const union = new Set([...set1, ...set2]);
    const res = Array.from(union);
    return res.sort((a, b) => a - b);
  }
}

const arr1 = new SortNumber();
arr1.addNum(7);
arr1.addNum(2);
arr1.addNum(13);
arr1.addNum(5);

const arr2 = new SortNumber();
arr2.addNum(5);
arr2.addNum(71);
arr2.addNum(43);
