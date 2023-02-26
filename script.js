const CalcBtn = document.querySelector('#calculate-button');
const eForm = document.querySelector('#e-form');

eForm.onsubmit = (e) =>  {
  e.preventDefault();
}
CalcBtn.onclick = (e) => {
  calculateGPA();
}
let totalGradePoints = 0;
let totalUnits = 0;
function calculateGPA() {
  var courseGradeInputs = document.getElementsByClassName("course-grade");
  var unitInputs = document.getElementsByClassName("unit");

  for (let i = 0; i < courseGradeInputs.length; i++) {
    let grade = parseFloat(courseGradeInputs[i].value);
    let units = parseFloat(unitInputs[i].value);
    console.log(units)

    // Check if the input values are valid numbers
    if (isNaN(grade) || isNaN(units)) {
      alert("Please enter valid numeric values.");
      return;
    }

    totalGradePoints += grade * units;
    totalUnits += units;
    console.log(totalUnits)
  }

  // Check if any input fields are empty
  if (totalUnits === 0) {
    alert("Please enter values for all input fields.");
    return;
  }

  var gpa = totalGradePoints / totalUnits;

  // Check if the calculated GPA is valid
  if (isNaN(gpa) || !isFinite(gpa)) {
    alert("There was an error calculating your GPA. Please check your input values.");
    return;
  }

  document.getElementById("result").innerHTML = "Your GPA is: " + gpa.toFixed(2);
}