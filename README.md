# Phase 1 Lab – Using Array.prototype.map()

**Author:** Samuel Esapar Emanman (Sam-Safari)

## Objective
Practice using JavaScript's `Array.prototype.map()` to transform an array of tutorial titles into Title Case.

## Files
- `index.html` — UI demo
- `styles.css` — external styles
- `index.js` — data + `titleCased()` function + DOM wiring
- `db.json` — data file containing tutorials
- `index.test.js` — Jest tests
- `package.json` — dev dependencies and scripts
- `.gitignore`
- `LICENSE` — MIT

## Lab Requirements
- Implement `titleCased()` that:
  - takes **no arguments**
  - uses the global `tutorials` array
  - returns a **new array** of title-cased strings
- Do not mutate the original `tutorials` array.

## How it works
1. Split each title string into words.
2. Map each word to a capitalized form (first char uppercase + rest unchanged).
3. Join words back together.
4. The outer `map()` applies the transformation to every title.

## Run locally (terminal)
1. Clone the repo:
   ```bash
   git clone git@github.com:Sam-Safari/phase-1-array-map-method-lab.git
   cd phase-1-array-map-method-lab
