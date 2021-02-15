function print(str) {
  console.log(str);
}

function isString(str, printFunc) {
  if (typeof str === 'string') {
    printFunc(str);
  }
}

function addDashes(str) {
  console.log(str.replace(/ /g, '-'));
}
function firstWordUpperCase(str, dashFunc) {
  let newStr = '';
  let i;
  for (i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      break;
    }
    newStr += str[i];
  }
  newStr = newStr.toUpperCase() + str.slice(i, str.length);
  dashFunc(newStr);
}
