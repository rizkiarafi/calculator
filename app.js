const buttonContainer = document.querySelector("#button-container");
const numberInput = document.querySelector("#number-input");
const operatedNumbers = [];

let pressedOperationBefore = false;
let currentOperation = "";

buttonContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList[0] === "number-btn") {
    displayNumber(target);
  } else if (
    target.classList[0] === "operation-btn" &&
    !pressedOperationBefore
  ) {
    operate(target);
  }
});

function operate(target) {
  operatedNumbers.push(Number(numberInput.value));

  if (operatedNumbers.length > 1) {
    showResult(currentOperation);
  }
  currentOperation = target.id;
  pressedOperationBefore = true;
}

function displayNumber(target) {
  if (pressedOperationBefore || numberInput.value === "0") {
    numberInput.value = "";
  }
  pressedOperationBefore = false;
  numberInput.value += target.textContent;
}

function showResult(id) {
  if (id === "add-btn") {
    numberInput.value = add(operatedNumbers[0], operatedNumbers[1]);
  } else if (id === "substraction-btn") {
    numberInput.value = substract(operatedNumbers[0], operatedNumbers[1]);
  } else if (id === "multiply-btn") {
    numberInput.value = multiply(operatedNumbers[0], operatedNumbers[1]);
  } else if (id === "division-btn") {
    numberInput.value = divide(operatedNumbers[0], operatedNumbers[1]);
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

function divide(num1, num2) {
  return num1 / num2;
}
