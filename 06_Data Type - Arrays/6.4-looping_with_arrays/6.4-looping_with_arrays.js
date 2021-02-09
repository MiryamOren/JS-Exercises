function percentageOfWorld(countryPopulation){
  const worldPopulation = 7900;
  return (countryPopulation / worldPopulation ) * 100;
}

function populationPercentages(countries){
  let percentages = [];
  let i;
  for (i = 0; i < countries.length; i++){
    percentages.push(percentageOfWorld(countries[i]));
  }
  return percentages;
}

let populations = [9, 10, 50, 23];

console.log(populationPercentages(populations));