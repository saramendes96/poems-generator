function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ac399aato84e379f39f3cfe3ba24af50";

  let context =
  "You are a travel expert who specializes in creating personalized travel recommendations. Your mission is to suggest a travel destination based on the user's instructions. Provide a short and engaging recommendation in basic HTML. Use <br/> to separate different pieces of information. Do NOT wrap the response in ```html or ``` markdown code fences. Do not include a title. Make sure to follow the user instructions.";

  let prompt = `User instructions: Generate a French poem about "${instructionsInput.value}"`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
