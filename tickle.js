function tickle(name, age, gender, hc) {
  if(age < 18) return `${name} is not old enough! Come back in ${18-age} year(s)`;

  const hcValues = { "Allergies": 0.01, "Sleep Apnea": 0.06, "Heart Disease": 0.17 }
  let cost = 100;
  let intervalsOfFiveYears = Math.floor((age - 18) / 5);
  if (intervalsOfFiveYears >= 1) cost += (intervalsOfFiveYears * 20);
  if (hcValues[hc]) cost += (cost * hcValues[hc]);
  if (gender == "female") cost -= 12;

  return(`${name}, $${cost.toFixed(2)}`);
}

console.log(tickle("Wilfred", 10, "male", "Sleep Apnea"));
console.log(tickle("Brad", 20, "male", "Heart Disease"));
console.log(tickle("Josh", 40, "male", "Sleep Apnea"));
console.log(tickle("Kelly", 50, "female", "Allergies"));