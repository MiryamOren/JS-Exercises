// eslint-disable-next-line max-classes-per-file
class Room {
  constructor(roomId, Level, amount, isFree = true) {
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

class Hotel {
  constructor(roomsArr) {
    this.roomsArr = roomsArr;
  }

  addNewRoom(amount, level, roomId) {
    this.roomsArr.forEach((el) => {
      if (el.roomId === roomId) {
        return false;
      }
    });
    this.roomsArr.push(new Room(amount, level, roomId));
  }

  removeRoom(roomId) {
    let indx;
    for (let i = 0; i < this.roomsArr; i++) {
      if (this.roomsArr[i].roomId === roomId) {
        indx = i;
        break;
      }
    }
    if (indx) {
      this.roomsArr.splice(indx, 1);
      return true;
    }
    return false;
  }

  checkFreeRooms(amount) {
    return this.roomsArr.filter((el) => el.amount >= amount);
  }

  checkIn(roomId, amount) {
    this.roomsArr.forEach((el) => {
      if (el.roomId === roomId && el.amount >= amount) {
        el.isFree = false;
        return true;
      }
    });
    return false;
  }

  HighRoomFree() {
    const highestLevel = this.roomsArr.reduce((highestLvl, room) => {
      if (room.level > highestLvl) {
        highestLvl = room.level;
      }
    }, 0);
    const roomsInHighestLevel = this.filter(
      (room) => room.level === highestLevel
    );
    return roomsInHighestLevel.sort((a, b) => a.amount - b.amount);
  }

  getAllRooms() {
    const freeRooms = this.roomsArr.filter((room) => room.isFree);
    return freeRooms.sort((a, b) => a.roomId - b.roomId);
  }
}
