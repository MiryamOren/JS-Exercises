const myCandyStore = {
  candies: [
    {
      name: 'mint gum',
      id: 'as12f',
      price: 2,
      amount: 2,
    },
    {
      name: 'twix',
      id: '5hd7y',
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  let i;
  for (i = 0; i < candyStore.candies.length; i++) {
    const candy = candyStore.candies[i];
    if (candy.id === id) {
      return candy;
    }
  }
}

console.log(getCandy(myCandyStore, '5hd7y'));

function getPrice(candyStore, id) {
  let i;
  for (i = 0; i < candyStore.candies.length; i++) {
    const candy = candyStore.candies[i];
    if (candy.id === id) {
      return candy.price;
    }
  }
}

console.log(getPrice(myCandyStore, '5hd7y'));

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    id,
    name,
    price,
    amount: 1,
  });
}

addCandy(myCandyStore, '12lk56', 'kinder bueno', 7);
console.log(myCandyStore);

function buy(candyStore, id) {
  let i;
  for (i = 0; i < candyStore.candies.length; i++) {
    const candy = candyStore.candies[i];
    if (candy.id === id) {
      candy.amount -= 1;
      candyStore.cashRegister += candy.price;
      return;
    }
  }
}

buy(myCandyStore, '5hd7y');
console.log(myCandyStore);
