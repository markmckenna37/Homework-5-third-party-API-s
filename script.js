// global variables
var currentTime;

// setting the text of the current day to HTML page using moment.js
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"))


// make if statements that set the class attribute to past/present/future using momentjs
// turning the military time hour into an integer
var mom = moment().format('HH');
console.log(parseInt(mom))

// making a function that checks every half second for conditions
function timeCheck() {
    timerInterval = setInterval(function () {
        // setting for past
        // looping through our 13 timeslots, adding 7 to the iterated variable to get the hour of that text area
        for (var i = 0; i < 13; i++) {
            var j = i + 7

            // comparing the hour of the timeblock to the current hour using my variable from moment.js
            // if id called by my iterated variable(with 7 added) is greater than the moment variable, then the future class is added to the id of the "i" repeated with other conditions for the other two classes

            if (mom > j) {
                $("#" + i).addClass("past")
            } else if (mom < j) {
                $("#" + i).addClass("future")
            } else {
                $("#" + i).addClass("present")
            }
        }
    }, 500);
}


// make an event listener for the buttons that add text to the text area

function addText() {
    for (var i = 0; i < 13; i++) {
        if (($("#" + i).val() == "")) {
            $("#" + i).val(localStorage.getItem("Text" + i))
        }
    }
}


// function that pulls the index number from each button and stores the text value to local storage
// When a save btn in clicked, a function is called to pull the index number from the save button that was clicked on (using this)
//then, the value of the text area with the id number pulled from the button index is pushed to local storage with a number name "text(index)"
$(".saveBtn").on("click", function () {
    var index = $(".saveBtn").index(this);
    localStorage.setItem("Text" + index, $("#" + index).val().trim())
});
// calling my functions
timeCheck();
addText()