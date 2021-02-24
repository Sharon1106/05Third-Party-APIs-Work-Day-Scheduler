// used moment(); function to capture todays info
var time = moment();
//variables made for html elements
var hour9 = $('#9am');
var hour10 = $('#10am');
var hour11 = $('#11am');
var hour12 = $('#12pm');
var hour13 = $('#13pm');
var hour14 = $('#14pm');
var hour15 = $('#15pm');
var hour16 = $('#16pm');
var hour17 = $('#17pm');

// when window opens todays moment is displayed on the id tag currentDay from html and displayed on screen
$("#currentDay").text(time.format('[Hello, today is ]dddd, MMMM Do')); 

  //  PSEUDOCODE FOR FIRST FUNCTION 
function plannerColors() {
    // set variables 
    var hour = time.hours();
    // selected time block class to iterate over 
    $(".time-block").each(function() {
    // currentHour is getting the number integer from timeblocks id's
    var currentHour = parseInt($(this).attr("id"));
    // if, current time matches the hour on site add class .present
    if (currentHour === hour) {
    $(this).addClass("present");
    //else if, the time is less than the hour add class .past
  } else if (currentHour < hour) {
    $(this).addClass("past");
    // else set the class to .future
  } else {
    $(this).addClass("future");
  }
})
} // call on function when page loads
plannerColors();

// // //PSEUDOCODE FOR SECOND FUNCTION 
  // When save button is clicked run this function
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
  // get userInput from this buttons siblings using id's or classes 
  var userInput = $(this).siblings().eq(1).val();

  var time = $(this).parent().attr("id");
  // saves the value in userInput with key name time
  localStorage.setItem(time, userInput);
});


// // //PSEUDOCODE FOR THIRDFUNCTION 
function renderPlanner() {
  // grab textarea element and initiate function, and iterate for each 
  $(".time-block").each(function() {
    // for the plannerinput variable we're grabbing the time blocks id value
  var plannerInput = localStorage.getItem($(this).attr("id"));
  // if the planner input returns null/ empty do not initiate the function
  if (plannerInput !== null){
    $(this).children().eq(1).val(plannerInput);
  }
  })
}
// call on function when page loads 
renderPlanner();