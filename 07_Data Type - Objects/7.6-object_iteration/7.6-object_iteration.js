const myObj = {
  property1: 'value1',
  property2: 'value2',
};
function swapPropertiesAndValues(obj) {
  const properties = Object.keys(obj);
  const newObj = {};

  let i;
  for (i = 0; i < properties.length; i++) {
    const originKey = properties[i];
    const originValue = obj[originKey];
    newObj[originValue] = originKey;
  }

  return newObj;
}

console.log(swapPropertiesAndValues(myObj));
