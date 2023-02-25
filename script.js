function calculateCGPA() {
    // Get the values from the input fields
    let course1 = document.getElementById("course1").value;
    let course2 = document.getElementById("course2").value;
    let course3 = document.getElementById("course3").value;
    let course4 = document.getElementById("course4").value;
    let course5 = document.getElementById("course5").value;
    let course6 = document.getElementById("course6").value;
    let course7 = document.getElementById("course7").value;
    let course8 = document.getElementById("course8").value;
    let course9 = document.getElementById("course9").value;
    let course10 = document.getElementById("course10").value;
    let course11 = document.getElementById("course11").value;
  
    let unit1 = document.getElementById("unit1").value;
    let unit2 = document.getElementById("unit2").value;
    let unit3 = document.getElementById("unit3").value;
    let unit4 = document.getElementById("unit4").value;
    let unit5 = document.getElementById("unit5").value;
    let unit6 = document.getElementById("unit6").value;
    let unit7 = document.getElementById("unit7").value;
    let unit8 = document.getElementById("unit8").value;
    let unit9 = document.getElementById("unit9").value;
    let unit10 = document.getElementById("unit10").value;
    let unit11 = document.getElementById("unit11").value;
  
    // Convert grades to their corresponding numerical values
    let grade1 = getGradeValue(course1);
    let grade2 = getGradeValue(course2);
    let grade3 = getGradeValue(course3);
    let grade4 = getGradeValue(course4);
    let grade5 = getGradeValue(course5);
    let grade6 = getGradeValue(course6);
    let grade7 = getGradeValue(course7);
    let grade8 = getGradeValue(course8);
    let grade9 = getGradeValue(course9);
    let grade10 = getGradeValue(course10);
    let grade11 = getGradeValue(course11);
  
    // Calculate the grade points for each course
    let gradePoints1 = grade1 * unit1;
    let gradePoints2 = grade2 * unit2;
    let gradePoints3 = grade3 * unit3;
    let gradePoints4 = grade4 * unit4;
    let gradePoints5 = grade5 * unit5;
    let gradePoints6 = grade6 * unit6;
    let gradePoints7 = grade7 * unit7;
    let gradePoints8 = grade8 * unit8;
    let gradePoints9 = grade9 * unit9;
    let gradePoints10 = grade10 * unit10;
    let gradePoints11 = grade11 * unit11;
    
    // Calculate the total grade points and total units
    let totalGradePoints =
      gradePoints1 +
      gradePoints2 +
      gradePoints3 +
      gradePoints4 +
      gradePoints5 +
      gradePoints6 +
      gradePoints7 +
      gradePoints8 +
      gradePoints9 +
      gradePoints10 +
      gradePoints11;
  
    let totalUnits =
      parseFloat(unit1) +
      parseFloat(unit2) +
      parseFloat(unit3) +
      parseFloat(unit4) +
      parseFloat(unit5) +
      parseFloat(unit6) +
      parseFloat(unit7) +
      parseFloat(unit8) +
      parseFloat(unit9) +
      parseFloat(unit10) +
      parseFloat(unit11);
  
    // Calculate the CGPA
    let cgpa = totalGradePoints / totalUnits;

    function calculateCGPA() {
        var totalGradePoints = 0;
        var totalUnits = 0;
        var courses = document.getElementsByClassName("course");
        var units = document.getElementsByClassName("unit");
      
        // Calculate the total grade points and units
        for (var i = 0; i < courses.length; i++) {
          var courseGrade = parseInt(courses[i].value);
          var courseUnit = parseInt(units[i].value);
          totalGradePoints += courseGrade * courseUnit;
          totalUnits += courseUnit;
        }
      
        // Calculate the CGPA
        var cgpa = totalGradePoints / totalUnits;
      
        // Determine the grade
        var grade;
        if (cgpa >= 70) {
          grade = "A";
        } else if (cgpa >= 60 && cgpa <= 69) {
          grade = "B";
        } else if (cgpa >= 50 && cgpa <= 59) {
          grade = "C";
        } else if (cgpa >= 45 && cgpa <= 49) {
          grade = "D";
        } else {
          grade = "F";
        }
      
        // Display the CGPA on the screen
        document.getElementById("calculate-button").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default form submission behavior
            calculateCGPA(); // Call the calculateCGPA function
          });

        document.getElementById("result").innerHTML = "Your CGPA is: " + cgpa.toFixed(2) + " (" + grade + ")"; 
    }
}