// used moment(); function to capture todays info
var time = moment();
//variables made for html elements
var hour9 = $('#9am');
var hour10 = $('#10am');
var hour11 = $('#11am');
var hour12 = $('#12pm');
var hour13 = $('#1pm');
var hour14 = $('#2pm');
var hour15 = $('#3pm');
var hour16 = $('#4pm');
var hour17 = $('#5pm');

// when window opens todays moment is displayed on the id tag currentDay from html and displayed on screen
$("#currentDay").text(time.format('[Hello, today is ]dddd, MMMM Do')); 

  //  PSEUDOCODE FOR FIRST FUNCTION 
function colorBasedOnHour() {
    // set variables 
    var hour = time.hours();
    // selected time block class to iterate over 
$(".time-block").each(function() {
    // currentHour is getting the number integer from timeblocks id's
    var currentHour = parseInt($(this).attr("id"));
    // if, current time matches the hour on site add class .present
    if (currentHour === hour) {
    $("textarea").addClass("present");
    //else if, the time is less than the hour add class .past
  } else if (currentHour < hour) {
    $("textarea").addClass("past");
    // else set the class to .future
  } else {
    $("textarea").addClass("future");
  }
})
} // call on function when page loads
colorBasedOnHour();
 


// // //PSEUDOCODE FOR SECOND FUNCTION 

  // and button is clicked
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
  // get userInput from this buttons siblings using id's or classes 
  var userInput = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  // saves whats in userInput to local storage
  localStorage.setItem(time, userInput);
});




// // //PSEUDOCODE FOR THIRDFUNCTION 
// // renderPlanner();
// function renderPlanner() {
//   var userInput = localStorage.getItem("userInput");
// // }
//  // // Retrieve
// // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//   // Use .setItem() to store object in storage
//   // JSON.stringify to convert it as a string
// // localStorage.setItem("userInput", JSON.stringify(userInput));
