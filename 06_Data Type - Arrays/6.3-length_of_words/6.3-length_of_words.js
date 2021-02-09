function lengthOfStrings(arr){
  let result = [];
  let i;
  for (i = 0; i < arr.length; i++){
    result.push(arr[i].length);
  }
  return result;
}