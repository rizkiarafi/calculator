const buttonContainer = document.querySelector("#button-container");
const numberInput = document.querySelector("#number-input");
const operatedNumbers = [];

let hasPreviousNumber = false;
let currentOperation = "";

buttonContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList[0] === "number-btn") {
    if (hasPreviousNumber) numberInput.value = "";
    hasPreviousNumber = false;
    numberInput.value += target.textContent;
  } else if (target.classList[0] === "operation-btn") {
    operatedNumbers.push(Number(numberInput.value));

    if (operatedNumbers.length > 1) {
      showResult(currentOperation);
    }
    currentOperation = target.id;
    hasPreviousNumber = true;
  }
});

function showResult(id) {
  if (id === "add-btn") {
    numberInput.value = add(operatedNumbers[0], operatedNumbers[1]);
  } else if (id === "multiply-btn") {
    numberInput.value = multiply(operatedNumbers[0], operatedNumbers[1]);
  }
  operatedNumbers.length = 0;
  operatedNumbers.push(Number(numberInput.value));
}

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
