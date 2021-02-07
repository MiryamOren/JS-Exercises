const currentDate = new Date();

let dayName = new Object();
dayName = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday", 
  6: "Saturday"
}

let monthName = new Object();
monthName = {
  0: "January",
  1:"February",
  2: "March",
  3: "April",	
	4: "May",	
	5: "June",
	6: "July",
	7: "August",
	8: "September",	
	9: "October",
	10: "November",	
	11: "December"
}

function date(){
  let dayOfWeek = dayName[currentDate.getDay()];
  let dayOfMonth = currentDate.getDate();
  let month = monthName[currentDate.getMonth()];
  let year = currentDate.getFullYear();

  return `Today is ${dayOfWeek} the ${dayOfMonth} of ${month}, ${year}`;
}

console.log(date());
