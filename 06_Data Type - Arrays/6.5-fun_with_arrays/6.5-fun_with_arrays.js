// 1.Fill an array with 100 of a same object using array fill method
let arr1 = new Array(100).fill(new Object);
console.log(arr1);

// 2. Create an array with numbers ranging from 1-100 using the Array.from method.
let arr2 = Array.from(Array(100), (element, i) => i + 1);

// 5. Find out if an array is an array.
console.log(Array.isArray(arr1));


// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified.
let arr1ShallowCopy = arr1.slice(0);
arr1ShallowCopy[0] = "Im only in the copy";
console.log(arr1ShallowCopy);
console.log(arr1);

// • Create a copy of an array that will effect the original
// array if modified.
let arr1DeepCopy = arr1;
arr1DeepCopy[0] = "Im in the original array";
console.log(arr1DeepCopy);
console.log(arr1);

