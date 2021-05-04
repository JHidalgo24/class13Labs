$(document).ready(function () {
    $("form").on("submit", collectEarned)
})

let Grade = {
    FirstName: "",
    LastName: "",
    pointsEarned: 0,
    pointsPossible: 0,
    collectEarned: function (points) {
        this.pointsEarned = points
    },
    collectPossible: function (possible) {
        this.pointsPossible = possible
    },
    collectFirst: function (possible) {
        this.FirstName = possible
    },
    collectLast: function (possible) {
        this.LastName = possible
    }
}

function collectEarned(event) {
    event.preventDefault();

    let inputEarned = $("#pointsEarned")
    let pointsMade = parseFloat(inputEarned.val());
    Grade.collectEarned(pointsMade)

    let inputPossible = $("#pointsPossible")
    let pointsPossible = parseFloat(inputPossible.val());
    Grade.collectPossible(pointsPossible)

    let inputLastName = $("#lName")
    Grade.collectLast(inputLastName.val());

    let inputFirstName = $("#fName")
    Grade.collectFirst(inputFirstName.val());

    displayInformation();
}

function displayInformation() {
$("#FirstName").text(Grade.FirstName);
$("#lastName").text(Grade.LastName);
let percentMade = (Grade.pointsEarned/Grade.pointsPossible)*100

$("#percent").text(percentMade);

if(percentMade>=90){
    $("#letterGrade").text("A")
}
else if(percentMade >=80){
    $("#letterGrade").text("B")
    }
else if(percentMade >=70){
    $("#letterGrade").text("C")
}
else if(percentMade >=60){
    $("#letterGrade").text("D")
}
else if(percentMade >=0){
    $("#letterGrade").text("F")
}

}