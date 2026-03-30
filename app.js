const buttonContainer = document.querySelector("#button-container");
const numberInput = document.querySelector("#number-input");
const operatedNumbers = [];

let pressedOperationBefore = false;
let hasPressedNumber = false;
let currentOperation = "";

const operatorRules = {};
setOperatorRules(operatorRules, add, substract, multiply, divide);

buttonContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList[0] === "number-btn") {
    displayTypedNumber(target);
    hasPressedNumber = true;
  } else if (target.id === "equal-btn" && hasPressedNumber) {
    if (currentOperation) {
      operatedNumbers.push(Number(numberInput.value));
    }
    if (operatedNumbers.length > 1) {
      showResult(currentOperation);
    }
  } else if (
    target.classList[0] === "operation-btn" &&
    !pressedOperationBefore &&
    hasPressedNumber
  ) {
    operate(target);
  }
});

function operate(target) {
  operatedNumbers.push(Number(numberInput.value));
  if (operatedNumbers.length > 1) {
    showResult(currentOperation);
    operatedNumbers.push(Number(numberInput.value));
  }
  currentOperation = target.id;
  pressedOperationBefore = true;
  console.log(currentOperation);
}

function displayTypedNumber(target) {
  if (pressedOperationBefore || numberInput.value === "0") {
    numberInput.value = "";
  }
  pressedOperationBefore = false;
  numberInput.value += target.textContent;
}

function showResult(id) {
  numberInput.value = getResult(id);
  operatedNumbers.length = 0;
  hasPressedNumber = true;
}

function getResult(id) {
  const result = operatorRules[id](operatedNumbers[0], operatedNumbers[1]);
  return result;
}

function setOperatorRules(operatorRules, ...functionArgs) {
  const operatorContainer = buttonContainer.querySelector(
    "#operation-container",
  );
  const operators = operatorContainer.children;
  for (let i = 0; i < operators.length; i++) {
    operatorRules[operators[i].id] = functionArgs[i];
  }
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
