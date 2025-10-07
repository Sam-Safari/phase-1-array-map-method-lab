// --- Lab Logic ---

// Tutorials array
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Robots array
const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

// Function to title-case a string
function titleCase(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to return title-cased tutorials
function titleCased() {
  return tutorials.map(titleCase);
}

// Function to activate robots
function activateRobots() {
  return robots.map(robot => {
    return Object.assign({}, robot, {
      modes: robot.modes * 2,
      isActivated: true,
    });
  });
}

// Export functions for testing
if (typeof module !== "undefined") {
  module.exports = {
    tutorials,
    robots,
    titleCase,
    titleCased,
    activateRobots,
  };
}

// --- DOM Manipulation (only run in browser) ---
if (typeof document !== "undefined") {
  // Display original tutorials
  const originalTutorialsList = document.getElementById("original-tutorials");
  tutorials.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    originalTutorialsList.appendChild(li);
  });

  // Display title-cased tutorials
  const titleCasedList = document.getElementById("titlecased-tutorials");
  titleCased().forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
