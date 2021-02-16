function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
calcAverage([85, 90, 92]);

// 1. First find the line that contains the problem. Write it
// down.
// line 4 / 2
// 2. Which debug method did you use to find the bug?
// chroom debugger
// 3. Explain the bug in your own words.
// sum לא מוגדר, ולכן אי אפשר להוסיף לו
// הפונקציה מחזירה סכום ולא ממוצע
// 4. Fix the code and submit it all.
