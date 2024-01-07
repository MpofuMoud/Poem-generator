function generatePoem(event) {
  event.preventDefault();
  let promptInput = document.querySelector("#prompt-input");
  let key = "b93bfbo44bd8a88678e0t635d05036d5";
  let context =
    "You are an expert in writing cool poems, please generate a short Poem in basic structure and seperate each line with a <br/>. Make sure to follow the user instructions below. ";
  let prompt = `User instructions: Generate a poem about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div id="generating">⌛Generating a poem about ${promptInput.value}</div>`;
}

function displayPoem(response) {
  console.log(response.data);
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
