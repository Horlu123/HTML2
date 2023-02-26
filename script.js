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
			var totalGradePoints = 0;
			var totalUnits = 0;
			var courseGradeInputs = document.getElementsByClassName("course-grade");
			var unitInputs = document.getElementsByClassName("unit");

			for (var i = 0; i < courseGradeInputs.length; i++) {
				var grade = parseFloat(courseGradeInputs[i].value);
				var units = parseFloat(unitInputs[i].value);

				// Check if the input values are valid numbers
				if (isNaN(grade) || isNaN(units)) {
					alert("Please enter valid numeric values.");
					return;
				}

				totalGradePoints += grade * units;
				totalUnits += units;
			}

			// Check if any input fields are empty
			if (totalUnits === 0) {
				alert("Please enter values for all input fields.");
				return;
			}

			var gpa = totalGradePoints / totalUnits;
			var gradeLevel = "";

			// Determine the grade level based on the GPA
			if (gpa >= 70 && gpa <= 100) {
				gradeLevel = "A";
			} else if (gpa >= 60 && gpa < 70) {
				gradeLevel = "B";
			} else {
				gradeLevel = "C";
			}

			// Check if the calculated GPA is valid
			if (isNaN(gpa) || !isFinite(gpa)) {
				alert("There was an error calculating your GPA. Please check your input values.");
				return;
			}

			document.getElementById("result").innerHTML = "Your GPA is: " + gpa.toFixed(2) + " (" + gradeLevel + ")";
		}
