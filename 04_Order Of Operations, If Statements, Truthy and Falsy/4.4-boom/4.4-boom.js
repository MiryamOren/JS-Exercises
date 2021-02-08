function boom(n){
  let i;
  for(i = 1; i <= n; i++){
    if ((i % 7 === 0) || (i.toString().includes("7"))){
      console.log("BOOM");
    }
    else{
      console.log(i);
    }
  }
}