const data = [
  {
    name: 'John',
    birthday: '1-1-1995',
    favoriteFoods: {
      meats: ['hamburgers', 'sausages'],
      fish: ['salmon', 'pike'],
    },
  },
  {
    name: 'Mark',
    birthday: '10-5-1980',
    favoriteFoods: {
      meats: ['hamburgers', 'steak', 'lamb'],
      fish: ['tuna', 'salmon', 'barracuda'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['ham', 'chicken'],
      fish: ['pike'],
    },
  },
  {
    name: 'Thomas',
    birthday: '1-10-1990',
    favoriteFoods: {
      meats: ['bird', 'rooster'],
      fish: ['salmon'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['hamburgers', 'lamb'],
      fish: ['anchovies', 'tuna'],
    },
  },
];

// 1. Create a function that returns all the names from the array
function getNames(arr) {
  const names = [];
  arr.forEach((obj) => {
    names.push(obj.name);
  });
  return names;
}

// 2. Create a function that returns all the objects that are born before 1990.

function getOlderThen31(arr) {
  const olderThen31 = [];
  arr.forEach((obj) => {
    const year = obj.birthday.split('-')[obj.birthday.split('-').length - 1];
    if (year < 1990) {
      olderThen31.push(obj);
    }
  });
  return olderThen31;
}

// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.

function getFoods(arr) {
  const foods = {};
  arr.forEach((obj) => {
    const favoriteFoods = Object.values(obj.favoriteFoods);
    favoriteFoods.forEach((foodKind) => {
      foodKind.forEach((food) => {
        if (foods[food]) {
          foods[food] += 1;
        } else {
          foods[food] = 1;
        }
      });
    });
  });
  return foods;
}
