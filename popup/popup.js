document
  .getElementById("tool-selection")
  .addEventListener("change", function () {
    const toolSelection = this.value;
    if (toolSelection === "date-difference-opt") {
      document.getElementById("date-difference").style.display = "";
      document.getElementById("brutten-nete").style.display = "none";
      document.getElementById("netten-brute").style.display = "none";
      document.getElementById("calculator").style.display = "none";
    } else if (toolSelection === "brutten-nete-opt") {
      document.getElementById("date-difference").style.display = "none";
      document.getElementById("brutten-nete").style.display = "";
      document.getElementById("netten-brute").style.display = "none";
      document.getElementById("calculator").style.display = "none";
    } else if (toolSelection === "netten-brute-opt") {
      document.getElementById("date-difference").style.display = "none";
      document.getElementById("brutten-nete").style.display = "none";
      document.getElementById("netten-brute").style.display = "";
      document.getElementById("calculator").style.display = "none";
    } else if (toolSelection === "calculator-opt") {
      document.getElementById("date-difference").style.display = "none";
      document.getElementById("brutten-nete").style.display = "none";
      document.getElementById("netten-brute").style.display = "none";
      document.getElementById("calculator").style.display = "";
    } else {
      alert("Hata");
    }
  });

// Gün farkı hesaplama
document.getElementById("calculate-btn").addEventListener("click", function () {
  const startDateValue = document.getElementById("start-date").value;
  const endDateValue = document.getElementById("end-date").value;

  if (!startDateValue || !endDateValue) {
    document.getElementById("result").innerHTML =
      "Lütfen her iki tarihi de doldurunuz.";
    return;
  }

  const startDate = new Date(startDateValue);
  const endDate = new Date(endDateValue);
  const timeDifference = endDate - startDate;
  const dayDifference = (timeDifference / (1000 * 3600 * 24)) * -1;

  document.getElementById("result").innerHTML = `${dayDifference} gün`;
});

// Hesap makinesi
let display = document.getElementById("display");

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-type");
    const value = button.getAttribute("data-value");

    switch (type) {
      case "number":
        appendNumber(value);
        break;
      case "operator":
        appendOperator(value);
        break;
      case "clear":
        clearDisplay();
        break;
      case "equal":
        calculate();
        break;
    }
  });
});

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = evaluateExpression(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function evaluateExpression(expression) {
  let tokens = tokenize(expression);
  let valueStack = [];
  let operatorStack = [];

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  for (let token of tokens) {
    if (isNumber(token)) {
      valueStack.push(parseFloat(token));
    } else if (isOperator(token)) {
      while (
        operatorStack.length &&
        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
      ) {
        let operator = operatorStack.pop();
        let b = valueStack.pop();
        let a = valueStack.pop();
        valueStack.push(applyOperator(a, b, operator));
      }
      operatorStack.push(token);
    }
  }

  while (operatorStack.length) {
    let operator = operatorStack.pop();
    let b = valueStack.pop();
    let a = valueStack.pop();
    valueStack.push(applyOperator(a, b, operator));
  }

  return valueStack[0];
}

function tokenize(expression) {
  let tokens = [];
  let numberBuffer = [];

  for (let char of expression) {
    if (isNumber(char) || char === ".") {
      numberBuffer.push(char);
    } else if (isOperator(char)) {
      if (numberBuffer.length) {
        tokens.push(numberBuffer.join(""));
        numberBuffer = [];
      }
      tokens.push(char);
    }
  }

  if (numberBuffer.length) {
    tokens.push(numberBuffer.join(""));
  }

  return tokens;
}

function isNumber(char) {
  return !isNaN(char);
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function applyOperator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
