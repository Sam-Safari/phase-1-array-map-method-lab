// index.js

// Sample data (tutorial titles)
export const tutorials = [
  "what does the this keyword mean?",
  "what is the CONTEXT of execution?",
  "what is hoisting?",
  "what is scope?",
  "what are closures?",
  "what are promises?",
  "what is the event loop?",
  "what is event bubbling?",
  "what are arrow functions?",
  "what is a callback function?"
];

// Function to convert all tutorial titles into Title Case
export function titleCased() {
  return tutorials.map(title => {
    return title
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
}
// --- DOM Integration ---
const originalList = document.getElementById("original-list");
const titlecasedList = document.getElementById("titlecased-list");
const btnTitlecase = document.getElementById("btn-titlecase");
const btnReset = document.getElementById("btn-reset");

// Render original tutorials
function renderOriginal() {
  originalList.innerHTML = "";
  tutorials.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    originalList.appendChild(li);
  });
}

// Render title-cased tutorials
function renderTitlecased() {
  titlecasedList.innerHTML = "";
  titleCased().forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    titlecasedList.appendChild(li);
  });
}

// Button events
btnTitlecase?.addEventListener("click", renderTitlecased);
btnReset?.addEventListener("click", () => {
  titlecasedList.innerHTML = "";
  renderOriginal();
});

// Initial render
renderOriginal();
