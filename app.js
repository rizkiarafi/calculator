const buttonContainer = document.querySelector("#button-container");
const numberInput = document.querySelector("#number-input");
const operatedNumbers = [];

buttonContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.id === "number-btn") {
    numberInput.value += target.textContent;
  } else if (target.id === "add-btn") {
    operate(operatedNumbers, (num1, num2) => add(num1, num2));
  } else if (target.id === "multiply-btn") {
    operate(operatedNumbers, (num1, num2) => multiply(num1, num2));
  }
});

function operate(numbers, getOperation) {
  numbers.push(Number(numberInput.value));

  if (operatedNumbers.length > 1) {
    showResult();
  } else {
    numberInput.value = "";
  }

  function showResult() {
    numberInput.value = getOperation(numbers[0], numbers[1]);
    operatedNumbers.length = 0;
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

function division(num1, num2) {
  return num1 / num2;
}
