// index.js
// This file contains the tutorials data, the titleCased() function (the lab's required function),
// and DOM wiring so the page demonstrates the transformation live on click.
// The module also exports the function & data for tests (CommonJS/ES interop).

export const tutorials = [
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

/**
 * titleCased
 * - No arguments
 * - Uses the `tutorials` array
 * - Returns a new array where every word in each title is Title Case
 *
 * Returns: Array<string>
 */
export function titleCased() {
  return tutorials.map((tutorial) => {
    // Split on spaces; preserve punctuation after words automatically
    const words = tutorial.split(" ");
    const capitalized = words.map((word) => {
      // Guard: if empty string, return as-is
      if (!word) return word;

      // For words that start with non-letter characters (e.g. "==", "JSONP?"),
      // charAt(0).toUpperCase() has no effect; that's OK.
      const first = word.charAt(0).toUpperCase();
      const rest = word.slice(1);
      return first + rest;
    });

    // Rejoin the transformed words to a single string
    return capitalized.join(" ");
  });
}

/* ---------- Simple DOM demo wiring ---------- */
function mountList(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = "";
  items.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    el.appendChild(li);
  });
}

if (typeof window !== "undefined") {
  // initial render
  mountList("original-list", tutorials);

  // buttons
  const btn = document.getElementById("btn-titlecase");
  const resetBtn = document.getElementById("btn-reset");
  btn?.addEventListener("click", () => {
    const result = titleCased();
    mountList("titlecased-list", result);
  });

  resetBtn?.addEventListener("click", () => {
    mountList("original-list", tutorials);
    mountList("titlecased-list", []);
  });
}

/* Export for CommonJS environments (like Jest) */
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { tutorials, titleCased };
}
