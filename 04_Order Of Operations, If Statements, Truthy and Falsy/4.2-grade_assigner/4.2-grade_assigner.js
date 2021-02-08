console.log("hello");
function score (scoreNum){
  if (scoreNum <= 64){
    return "F";
  }
  if (scoreNum <= 69){
    return "D";
  }
  if (scoreNum <= 79){
    return "C";
  }
  if (scoreNum <= 89){
    return "B";
  }
  else{
    return "A";
  }
}