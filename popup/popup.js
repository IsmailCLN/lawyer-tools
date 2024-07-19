function calculateDateDifference() {
  const startDate = new Date(document.getElementById("start-date").value);
  const endDate = new Date(document.getElementById("end-date").value);
  const timeDifference = endDate - startDate;
  const dayDifference = timeDifference / (1000 * 3600 * 24);
  document.getElementById(
    "result"
  ).innerHTML = `The difference is ${dayDifference} days.`;
}
