const questionButton = Array.from(
  document.querySelectorAll(".faq__question-button")
);

function toggleDescription(event) {
  const pressedBtn = event.target;

  const btnId = pressedBtn.getAttribute("aria-controls");

  const btnExpand = pressedBtn.getAttribute("aria-expanded");

  const description = document.getElementById(btnId);

  btnExpand === "false"
    ? pressedBtn.setAttribute("aria-expanded", true)
    : pressedBtn.setAttribute("aria-expanded", false);

  description.classList.toggle("show-description");
  pressedBtn.classList.toggle("font-weight-bold");

  console.log(btnExpand);
  console.log(pressedBtn);
}

questionButton.forEach((button) =>
  button.addEventListener("click", toggleDescription)
);
