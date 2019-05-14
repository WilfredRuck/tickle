describe("tickle", () => {
  const tickle = require('../lib/tickle');
  const user1 = {name: "Kelly", age: 50, gender: "female", hc: "Allergies"};
  const user2 = {name: "Josh", age: 40, gender: "male", hc: "Sleep Apnea"};
  const user3 = {name: "Brad", age: 20, gender: "male", hc: "Heart Disease"};
  const user4 = {name: "Anton", age: 18, gender: "male", hc: "Cyberchondria"};
  const user5 = {name: "Wilfred", age: 10, gender: "male", hc: "Sleep Apnea"};

  it("adds a discount for a female", () => {
    expect(tickle(user1)).toEqual("Kelly, $210.20");
    console.log(tickle(user1));
  });

  it("Applies health condition's cost increase", () => {
    expect(tickle(user2)).toEqual("Josh, $190.80");
    console.log(tickle(user2));
  });

  it("returns $117.00", () => {
    expect(tickle(user3)).toEqual("Brad, $117.00");
    console.log(tickle(user3));
  });

  it("doesn't increase the base price", () => {
    expect(tickle(user4)).toEqual("Anton, $100.00");
    console.log(tickle(user4));
  });

  it("returns a message when underage", () => {
    expect(tickle(user5)).toEqual("Wilfred is not old enough! Come back in 8 year(s)");
    console.log(tickle(user5));
  });
});