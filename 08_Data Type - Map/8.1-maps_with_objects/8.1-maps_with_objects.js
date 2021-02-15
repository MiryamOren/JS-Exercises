const person1 = {
  name: 'Or',
};
const person2 = {
  name: 'Adee',
};
const person3 = {
  name: 'Shir',
};

const myMap = new Map();
myMap.set(person1, 123456789);
myMap.set(person2, 234567891);
myMap.set(person3, 345678912);

for (const [key, value] of myMap) {
  console.log(key.name, value);
}
