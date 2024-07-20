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
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
