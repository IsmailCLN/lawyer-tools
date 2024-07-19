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
