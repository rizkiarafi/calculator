const buttonContainer = document.querySelector("#button-container");
const numberInput = document.querySelector("#number-input");

buttonContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList[0] === "number-btn") {
    numberInput.value += target.textContent;
  }
});

const operatedNumbers = [10, 10];

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
