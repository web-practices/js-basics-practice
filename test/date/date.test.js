import {
  getDayOfMonth,
  getDayOfWeek,
  getYear,
  getMonth,
  getMilliseconds
} from "../../src/date/date.js";

describe("Date Practice Test", function() {
  it("Get the day of the month from a specific date", () => {
    let input = "July 21, 2019 01:15:00";
    let output = getDayOfMonth(input);
    expect(output).toBe(21);
  });

  it("Get the day of the week", () => {
    let input = "July 22, 2019 01:15:00";
    let output = getDayOfWeek(input);
    expect(output).toBe(1);
  });

  it("Get the year", () => {
    let input = "July 22, 2019 01:15:00";
    let output = getYear(input);
    expect(output).toBe(2019);
  });

  it("Get the month of year", () => {
    let input = "July 22, 2019 01:15:00";
    let output = getMonth(input);
    expect(output).toBe(6);
  });

  it("Get the number of milliseconds since midnight, January 1, 1970", () => {
    let input = "July 22, 2019 01:15:00";
    let output = getMilliseconds(input);
    expect(output).toBe(1563729300000);
  });
});
