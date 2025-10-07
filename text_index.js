// Additional practice for title-casing and mapping
const sampleTutorials = [
  "learning map function in javascript",
  "advanced array methods",
];

const formattedTutorials = sampleTutorials.map((tutorial) =>
  tutorial
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);

console.log("Formatted Tutorials:", formattedTutorials);
