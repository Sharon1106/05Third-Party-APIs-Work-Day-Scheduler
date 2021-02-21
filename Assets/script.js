// used moment(); function to capture todays info
var todaysDate = moment();
//variables made for html elements
var hour9 = $('#9am');
var hour10 = $('#10am');
var hour11 = $('#11am');
var hour12 = $('#12pm');
var hour1 = $('#1pm');
var hour2 = $('#2pm');
var hour3 = $('#3pm');
var hour4 = $('#4pm');
var hour5 = $('#5pm');

//todays moment is displayed on the id tag currentDay from html and displayed on screen
$("#currentDay").text(todaysDate.format('[Hello, today is ]dddd, MMMM Do')); 

$("textarea" ).addClass( "present");

//if the curernt time matches one of the hours on the scren change color to green
// function pastPresentFuture() {

// }

// if(currentHour === hour) {
//   hourEl.attr('class', 'present');
  

// }
