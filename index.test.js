const { tutorials, titleCased } = require("./index.js");

test("returns an array of the same length", () => {
  expect(titleCased().length).toBe(tutorials.length);
});

test("capitalizes every word in every title", () => {
  const result = titleCased();
  result.forEach(title => {
    title.split(" ").forEach(word => {
      expect(word[0]).toMatch(/[A-Z]/);
    });
  });
});
