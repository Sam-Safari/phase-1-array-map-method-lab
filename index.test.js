// index.test.js

let titleCased, tutorials;

beforeAll(async () => {
  const mod = await import('./index.js');
  titleCased = mod.titleCased;
  tutorials = mod.tutorials;
});

describe("titleCased()", () => {
  test("returns an array of the same length", () => {
    expect(titleCased().length).toBe(tutorials.length);
  });

  test("capitalizes every word in every title", () => {
    const result = titleCased();
    result.forEach(title => {
      title.split(" ").forEach(word => {
        if (word.length > 0) {
          expect(word[0]).toBe(word[0].toUpperCase());
        }
      });
    });
  });
});
