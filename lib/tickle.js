const BASE_COST = 100;
const MINIMUM_AGE = 18;
const HC_VALUES = { "allergies": 0.01, "sleep apnea": 0.06, "heart disease": 0.17 };
const INCREASED_AMOUNT = 20;
const FEMALE_DISCOUNT = 12;
const INTERVAL = 5;

function tickle(customer) {
  if(customer.age < MINIMUM_AGE) {
    return `${customer.name} is not old enough! Come back in ${MINIMUM_AGE-customer.age} year(s)`;
  }
  let cost = BASE_COST;
  const amountOfIntervals = Math.floor((customer.age - MINIMUM_AGE) / INTERVAL);

  if (amountOfIntervals >= 1) cost += (amountOfIntervals * INCREASED_AMOUNT);
  if (HC_VALUES[customer.hc.toLowerCase()]) cost += (cost * HC_VALUES[customer.hc.toLowerCase()]);
  if (customer.gender.toLowerCase() === "female") cost -= FEMALE_DISCOUNT;

  return(`${customer.name}, $${cost.toFixed(2)}`);
}

module.exports = tickle;