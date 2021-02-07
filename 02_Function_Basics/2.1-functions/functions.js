function describeCountry(country, population, capitalCity){
  return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

let finland = describeCountry('Finland', 5.5, 'Helsinki');
let denmark = describeCountry('Denmark', 5.8, 'Copenhagen');
let norway = describeCountry('Norway', 5.4, 'Oslo');

console.log(finland + "\n" + denmark + "\n" + norway + "\n")