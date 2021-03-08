class Room {
  constructor(roomId, Level, amount, isFree = false) {
    this.roomId = roomId;
    this.Level = Level;
    this.amount = amount;
    this.isFree = isFree;
  }

  enoughSpace(numOfPepole) {
    return numOfPepole <= this.amount;
  }

  print() {
    console.log(`room Id: ${this.roomId}
    Level: ${this.Level}
    Amount of Pepole: ${this.amount}
    Is Free: ${this.isFree}`);
  }
}
