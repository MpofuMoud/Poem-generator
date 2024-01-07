function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
