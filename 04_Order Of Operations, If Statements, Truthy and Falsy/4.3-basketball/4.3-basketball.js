let john = {
  name: "Jhon",
  scoreAverage: ( 89 + 120 + 103) / 3
}
let mike = {
  name: "Mike",
  scoreAverage: (116 + 94 + 123) / 3
}

let mary = {
  name: "Mary",
  scoreAverage: (97 + 134 + 105) / 3
}

let winner;

if ((john.scoreAverage > mike.scoreAverage) && john.scoreAverage > mary.scoreAverage){
  winner = john;
}
else if ((mike.scoreAverage > john.scoreAverage) && (mike.scoreAverage > mary.scoreAverage)){
  winner = mike;
}
else if ((mary.scoreAverage > john.scoreAverage) && (mary.scoreAverage > mike.scoreAverage)){
  winner = mary;
}
else{
  winner = null;
}

if (winner){
  console.log(`The winning team is ${winner.name}'s team, with an average of ${winner.scoreAverage} points`);
}
else{
  console.log("Draw");
}