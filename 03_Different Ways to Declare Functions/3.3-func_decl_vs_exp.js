function percentageOfWorld1(population){
  const worldPopulation = 7900;
  return (population / worldPopulation ) * 100;
}

let egypt1 = percentageOfWorld1(100);
let jordan1 = percentageOfWorld1(10.6);
let saudiArabia1 = percentageOfWorld1(34.2);

console.log(`Percentage of the population in the country out of the total population of the world:
Egypt: ${egypt1}
Jordan: ${jordan1}
Saudi Arabia: ${saudiArabia1}\n`);

const percentageOfWorld2 = function(population){
  const worldPopulation = 7900;
  return (population / worldPopulation ) * 100;
}

let egypt2 = percentageOfWorld1(100);
let jordan2 = percentageOfWorld1(10.6);
let saudiArabia2 = percentageOfWorld1(34.2);

console.log(`Percentage of the population in the country out of the total population of the world:
Egypt: ${egypt2}
Jordan: ${jordan2}
Saudi Arabia: ${saudiArabia2}\n`);