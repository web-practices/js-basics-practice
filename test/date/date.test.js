import { getDayOfMonth } from "../../src/date/date.js";

describe("Date Practice Test", function() {
  it("Get the day of the month from a specific date", () => {
    let input = "July 21, 2019 01:15:00";
    let output = getDayOfMonth(input);
    expect(21).toEqual(output);
  });
});
