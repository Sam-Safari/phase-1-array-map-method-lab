// --- Pure Logic ---
export function titleCased(tutorials) {
  return tutorials.map(title =>
    title
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

// --- DOM Integration ---
if (typeof document !== "undefined") {
  const originalList = document.getElementById("original-list");
  const titlecasedList = document.getElementById("titlecased-list");
  const btnTitlecase = document.getElementById("btn-titlecase");
  const btnReset = document.getElementById("btn-reset");

  const tutorials = [
    "what does the this keyword mean?",
    "what is the DOM?",
    "what is an event listener?",
    "explain event delegation",
    "what is a closure?",
    "what is a promise?",
    "what are classes?",
    "what are arrow functions?",
    "what is the purpose of async/await?",
    "what is JSON?"
  ];

  // Populate original list
  tutorials.forEach(title => {
    const li = document.createElement("li");
    li.textContent = title;
    originalList.appendChild(li);
  });

  btnTitlecase.addEventListener("click", () => {
    const converted = titleCased(tutorials);
    titlecasedList.innerHTML = "";
    converted.forEach(title => {
      const li = document.createElement("li");
      li.textContent = title;
      titlecasedList.appendChild(li);
    });
  });

  btnReset.addEventListener("click", () => {
    titlecasedList.innerHTML = "";
  });
}
