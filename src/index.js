function generatePoem(event) {
  event.preventDefault();

let apiKey = "ac399aato84e379f39f3cfe3ba24af50";

new Typewriter("#poem", {
  strings: "La tombe dit à la rose",
  autoStart: true,
  delay: 1,
  cursor: "",
}

let poemFormElement = document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
