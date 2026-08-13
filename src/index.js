function displayDestination(response) {
  console.log("destination generated");

  new Typewriter("#destination", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateDestination(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ac399aato84e379f39f3cfe3ba24af50";

  let context =
  "You are a travel expert who specializes in creating personalized travel recommendations. Your mission is to suggest a travel destination based on the user's instructions. Provide a short and engaging recommendation in basic HTML. Use <br/> to separate different pieces of information. Do NOT wrap the response in ```html or ``` markdown code fences. Do not include a title. Make sure to follow the user instructions.";
  
  let prompt = `User instructions: Suggest a travel destination based on "${instructionsInput.value}"`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let destinationElement = document.querySelector("#poem");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="blink">Finding the perfect destination for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayDestination);
}

let formElement = document.querySelector("#travel-generator-form");
formElement.addEventListener("submit", generateDestination);
