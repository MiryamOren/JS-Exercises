let b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
const firstResult = someFunction(9);
const result = firstResult(2);

// 5

const a = 1;
function b2() {
  a = 10;
  function a() {}
}
b2();
console.log(a);
// 1

function myFunc() {
  let i;
  const funcs = [];
  for (i = 0; i < 3; i++) {
    console.log(i);
    const log = () => `i is: ${i}`;
    funcs.push(log);
    // setTimeout(log, 100);
  }
  return funcs;
}
const logs = myFunc();
console.log(logs[0](), logs[1](), logs[2]());

// 0
// 1
// 2
// i is: 3 i is: 3 i is: 3
