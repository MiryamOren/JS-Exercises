const numbers = [1, 52, 32, 11, 23, 856, 27, 12];
// 1. max
function max(arr) {
  return arr.reduce((maxElement, currentValue) => {
    if (currentValue > maxElement) {
      maxElement = currentValue;
    }
    return maxElement;
  });
}
// 2. sum of even numbers
function sumOfEven(arr) {
  return arr.reduce((sum, currentValue) => {
    if (currentValue % 2 === 0) {
      sum += currentValue;
    }
    return sum;
  }, 0);
}

// 3. average
function average(arr) {
  return arr.reduce((sum, currentValue, index, array) => {
    console.log(sum, currentValue);
    return sum + currentValue / array.length;
  }, 0);
}
