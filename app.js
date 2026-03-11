const buttonContainer = document.querySelector("#button-container");
const numberInput = document.querySelector("#number-input");
const operatedNumbers = [];

buttonContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.id === "number-btn") {
    numberInput.value += target.textContent;
  } else if (target.id === "add-btn") {
  } else if (target.id === "multiply-btn") {
  }
});

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}
