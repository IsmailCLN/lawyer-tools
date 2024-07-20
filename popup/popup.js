document
  .getElementById("tool-selection")
  .addEventListener("change", function () {
    const toolSelection = this.value;
    if (toolSelection === "date-difference-opt") {
      document.getElementById("date-difference").style.display = "";
      document.getElementById("brutten-nete").style.display = "none";
      document.getElementById("netten-brute").style.display = "none";
    } else if (toolSelection === "brutten-nete-opt") {
      document.getElementById("date-difference").style.display = "none";
      document.getElementById("brutten-nete").style.display = "";
      document.getElementById("netten-brute").style.display = "none";
    } else if (toolSelection === "netten-brute-opt") {
      document.getElementById("date-difference").style.display = "none";
      document.getElementById("brutten-nete").style.display = "none";
      document.getElementById("netten-brute").style.display = "";
    } else {
      alert("Seçim yapılmamış");
    }
  });

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
