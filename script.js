const { body } = document;
const background1 = document.querySelector(".background-1");
const background2 = document.querySelector(".background-2");
const background3 = document.querySelector(".background-3");

const changeBackground = function (num) {
  // Check if background already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset CSS class for body
  body.className = "";
  switch (num) {
    case "1":
      return previousBackground === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return previousBackground === "background-2"
        ? false
        : body.classList.add("background-2");

    case "3":
      return previousBackground === "background-3"
        ? false
        : body.classList.add("background-3");

    default:
      break;
  }
};
