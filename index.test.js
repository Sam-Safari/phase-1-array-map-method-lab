// index.test.js
// Node-friendly require; Jest runs in Node.
const { titleCased, tutorials } = require("./index.js");

describe("titleCased()", () => {
  test("returns an array of the same length", () => {
    const result = titleCased();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(tutorials.length);
  });

  test("capitalizes the first letter of each word", () => {
    const result = titleCased();
    // sample checks
    expect(result[0]).toBe("What Does The This Keyword Mean?");
    expect(result[2]).toBe("Implementing Blockchain Web API");
    expect(result[9]).toBe("What Is JSONP?");
  });

  test("does not mutate original array", () => {
    const original = [...tutorials];
    titleCased();
    expect(tutorials).toEqual(original);
  });
});
