console.log("hi");
function passwordValidation1(password){
  if (password.length >= 7){
    return "Strong";
  }
  else {s
    return "Weak";
  }
}

function passwordValidation2(password){
  return password.length >= 7 ? "Strong": "Weak";
}

function passwordValidation3(password){
  let returnValue;
  (password.length >= 7) && (returnValue = "Strong");
  (password.length < 7) && (returnValue = "Weak");
  return returnValue;
}

function includesCapital(str){
  let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let i;
  for (i = 0; i < str.length ;i++){
    if (capital.includes(str[i])){
      return true;
    }
  }
  return false;
}
function advancedPasswordValidation(password){
  let returnValue = (password.length > 7 && includesCapital(password)) ? "Very Strong": "Strong";
  returnValue = password.length < 7 ? "Weak" : returnValue;
  return returnValue;
}

