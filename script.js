// global variables
var currentTime;
var textElements = []

// setting the text of the current day to HTML page using momentjs
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"))


// make if statements that set the class attribute to past/present/future using momentjs
var mom = moment().format('HH');
console.log(parseInt(mom))

// function timeCheck() {
//     timerInterval = setInterval(function () {
//         if($("#data-index") {}
//     }, 1000);
// }    



// if ($(".text").find('[data-index ="i"]') ) {





// gonna try and hook up my local storage
// make an event listener for the buttons that add text to the text area
// function addText() {
//     if ($(".text").val() != "")
//     textElements.push($(".text").val().trim())
//     console.log(textElements)
// }
// $(".saveBtn").on("click", function() {
//     for (var i = 0; i < 12; i++) {
//     if($(".saveBtn"))
//     }
// })
$(".0").on("click", function() {
    localStorage.setItem("Text0", $("#7am").val().trim())
    addText();
})
$(".1").on("click", function() {
    localStorage.setItem("Text1", $("#8am").val().trim())
})
$(".2").on("click", function() {
    localStorage.setItem("Text2", $("#9am").val().trim())
})
$(".3").on("click", function() {
    localStorage.setItem("Text3", $("#10am").val().trim())
})
$(".4").on("click", function() {
    localStorage.setItem("Text4", $("#11am").val().trim())
})
$(".5").on("click", function() {
    localStorage.setItem("Text5", $("#12pm").val().trim())
})
$(".6").on("click", function() {
    localStorage.setItem("Text6", $("#1pm").val().trim())
})
$(".7").on("click", function() {
    localStorage.setItem("Text7", $("#2pm").val().trim())
})
$(".8").on("click", function() {
    localStorage.setItem("Text8", $("#3pm").val().trim())
})
$(".9").on("click", function() {
    localStorage.setItem("Text9", $("#4pm").val().trim())
})
$(".10").on("click", function() {
    localStorage.setItem("Text10", $("#5pm").val().trim())
})
$(".11").on("click", function() {
    localStorage.setItem("Text11", $("#6pm").val().trim())
})
$(".12").on("click", function() {
    localStorage.setItem("Text12", $("#7pm").val().trim())
})