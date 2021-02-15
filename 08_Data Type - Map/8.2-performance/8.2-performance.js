const maxCount = 1000000;

const myObj = {};
console.time('My Obj set');
for (let i = 0; i < maxCount; i++) {
  myObj.i = i * 2;
}
console.timeEnd('My Obj set');

const myMap = new Map();
console.time('My Map set');
for (let i = 0; i < maxCount; i++) {
  myMap.set(i, i * 2);
}
console.timeEnd('My Map set');

console.time('My Obj get');
for (const [property, value] of myMap) {
  if (value === 2000000) {
    console.log(property, value);
    break;
  }
}
console.timeEnd('My Obj get');

console.time('My Map get');
for (const [key, value] of myMap) {
  if (value === 2000000) {
    console.log(key, value);
    break;
  }
}
console.timeEnd('My Map get');

console.time('My Obj entry');
for (let i = 0; i < maxCount; i++) {
  const ObjEntry = Object.entries(myObj);
}
console.timeEnd('My Obj entry');

console.time('My Map entry');
for (let i = 0; i < maxCount; i++) {
  const MapEntry = myMap.entries();
}
console.timeEnd('My Map entry');
