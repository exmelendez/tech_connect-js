const h1Tag = document.getElementById("cal-burned-title");
const pTag = document.getElementById("cal-summary");
const dailyCalIntake = 3500; //daily intake calorie
const calHourlyBurnRate = 125; //calories per hour
let calsBurned, finalCalIntake, hoursWorkedout;

/* ES6 Functions to calculate calories burned and the final calorie intake */
const calcBurnedCals = hours => {
  hoursWorkedout = hours;
  return hours * calHourlyBurnRate;
};
const calcFinalCalIntake = calBurned => dailyCalIntake - calBurned;

/* Variables initialized by used of functions/parameters */
calsBurned = calcBurnedCals(prompt("enter hours"));
finalCalIntake = calcFinalCalIntake(calsBurned);

/* H1 Tag & P Tag Demo data render */
h1Tag.innerHTML = `Calories Burned: ${calsBurned}`;
pTag.innerHTML = `Calorie Intake: ${dailyCalIntake} |    Hours Workedout: ${hoursWorkedout} | 
    Final Calorie Count: ${finalCalIntake}`;

/* H1 Tag & P Tag Demo Element Styling */
h1Tag.style.fontSize = "36px";
h1Tag.style.fontFamily = "Impact";
h1Tag.style.color = "red";
