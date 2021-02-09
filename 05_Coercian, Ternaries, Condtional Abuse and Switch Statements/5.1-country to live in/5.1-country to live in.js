function countryToLiveIn(language, isIsland, population, country){
  if ((!isIsland) && (language === "English") && (population < 50000000)){
    console.log(`You should live in ${country}`);
  }
  else{
    console.log(`${country} does not meet your criteria`);
  } 
}