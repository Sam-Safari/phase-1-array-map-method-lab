import { titleCased } from "./index.js";

describe("titleCased()", () => {
  const tutorials = [
    "what does the this keyword mean?",
    "what is the DOM?"
  ];

  test("returns an array of the same length", () => {
    expect(titleCased(tutorials)).toHaveLength(tutorials.length);
  });

  test("capitalizes every word in every title", () => {
    const result = titleCased(tutorials);
    expect(result[0]).toBe("What Does The This Keyword Mean?");
    expect(result[1]).toBe("What Is The DOM?");
  });
});
