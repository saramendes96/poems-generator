function generatePoem(event) {
  event.preventDefault();

let poemElement = document.querySelector ("#poem");
poemElement.innerHTML = "La tombe dit à la rose";
}

let poemFormElement = document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
