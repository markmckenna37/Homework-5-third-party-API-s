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


// function that pulls the index number from each button and stores the text value to local storage
$(".saveBtn").on("click", function() {
    var index = $(".saveBtn").index( this );
    localStorage.setItem("Text" + index, $("#" + index).val())
});





// $(".0").on("click", function() {
//     localStorage.setItem("Text0", $("#7am").val().trim())
//     addText();
// })
