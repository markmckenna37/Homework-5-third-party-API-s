// global variables
var currentTime;

// setting the text of the current day to HTML page using moment.js
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"))


// make if statements that set the class attribute to past/present/future using momentjs
// turning the military time hour into an integer
var mom = moment().format('HH');
console.log(parseInt(mom))

// making a function that checks every second for conditions
function timeCheck() {
    timerInterval = setInterval(function () {
        // setting for past
        // looping through our 13 timeslots, adding 7 to the iterated variable to get the hour of that text area
        for (var i = 0; i < 13; i++) {
            var j = i + 7

            // comparing the hour of the timeblock to the current hour using my variable from moment.js

        if (mom  >  j) {
            $("#" + i).addClass("past")
        }
        else if (mom < j) {
            $("#" + i).addClass("future")
        } 
        else {
            $("#" + i).addClass("present")
        }
    }
    }, 500);
}    


// gonna try and hook up my local storage
// make an event listener for the buttons that add text to the text area

function addText() {
    for (var i = 0; i < 13; i++) {
    if (($("#" + i).val() == "")) {
        $("#" + i).val(localStorage.getItem("Text" + i))
    }
    // else {
    //     textElements.push($(".text").val().trim())
    //     console.log(textElements)
    // }
}
}


// function that pulls the index number from each button and stores the text value to local storage
$(".saveBtn").on("click", function() {
    var index = $(".saveBtn").index( this );
    localStorage.setItem("Text" + index, $("#" + index).val().trim())
});

timeCheck();
addText()

