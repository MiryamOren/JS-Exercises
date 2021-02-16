const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (
  let subArrIndex = 0;
  subArrIndex < listOfNeighbours.length;
  subArrIndex++
) {
  const subArr = listOfNeighbours[subArrIndex];
  for (let countryIndex = 0; countryIndex < subArr.length; countryIndex++) {
    console.log(`Neighbour: ${subArr[countryIndex]}`);
  }
}
