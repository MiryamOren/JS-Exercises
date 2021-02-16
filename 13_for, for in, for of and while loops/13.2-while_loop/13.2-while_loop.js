function percentageOfWorld(countryPopulation) {
  const worldPopulation = 7900;
  return (countryPopulation / worldPopulation) * 100;
}

function populationPercentages(countries) {
  const percentages = [];
  let i = 0;
  while (i < countries.length) {
    percentages.push(percentageOfWorld(countries[i]));
    i++;
  }
  return percentages;
}

const populations = [9, 10, 50, 23];

console.log(populationPercentages(populations));
