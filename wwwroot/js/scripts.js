/*Assign submit button and form to variables 'submit' and 'form' respectively*/
let submit = document.getElementById('submitBtn');
let form = document.getElementById('myForm');

/* Add event listener for submission*/
form.addEventListener("submit", function (event) {
    /* Prevent reload on submit */
    event.preventDefault();
    /*Setting input values to variables*/
    let assignments = document.getElementById('assignments').value;
    let groupProjects = document.getElementById('group-projects').value;
    let quizzes = document.getElementById('quizzes').value;
    let exams = document.getElementById('exams').value;
    let intex = document.getElementById('intex').value;
    /*Calculating the final grade using assignment weights*/
    let finalGrade = ((assignments * .5) + (groupProjects * .1) + (quizzes * .1) + (exams * .2) + (intex * .1)).toFixed(2);
    /*Assignming dom element the final Grade*/
    document.getElementById('finalGrade').value = finalGrade + "%";

    /*Determining lettergrade based on final grade percentage*/
    let letterGrade = "";
    if (finalGrade >= 94) {
        letterGrade = "A";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 87) {
        letterGrade = "B+";
    } else if (finalGrade >= 84) {
        letterGrade = "B";
    } else if (finalGrade >= 80) {
        letterGrade = "B-";
    } else if (finalGrade >= 77) {
        letterGrade = "C+";
    } else if (finalGrade >= 74) {
        letterGrade = "C";
    } else if (finalGrade >= 70) {
        letterGrade = "C-";
    } else if (finalGrade >= 67) {
        letterGrade = "D+";
    } else if (finalGrade >= 64) {
        letterGrade = "D";
    } else if (finalGrade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }
    /*Assignming dom element the letter grade*/
    document.getElementById('letterGrade').value = letterGrade;
})