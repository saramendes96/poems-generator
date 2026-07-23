function displayPoem(response) {
  new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
}
}

function generatePoem(event) {
  event.preventDefault();

let apiKey = "ac399aato84e379f39f3cfe3ba24af50";
let prompt = "";
let context = "";
let apiURL = "https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={apiKey}";

console.log("generating poem");

axios.get(apiURL).then(displayPoem);

let poemFormElement = document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
