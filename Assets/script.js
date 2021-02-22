// used moment(); function to capture todays info
var today = moment();
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

//todays moment is displayed on the id tag currentDay from html and displayed on screen
$("#currentDay").text(today.format('[Hello, today is ]dddd, MMMM Do')); 



// //if the curernt time matches one of the hours on the screen change color to green
  function pastPresentFuture() {
    var time = moment().format('h');
    var hours = JSON.parse(hours)


   if (currentHour === hours) {
    $("textarea").addClass("present");
  } else if (currentHour < hours) {
    $("textarea").addClass("past");
  } else {
  $("textarea").addClass("future");
  }
  }
  pastPresentFuture();
 
  // Selects the current HTML element
  // $("button").click(function(){
  //   $(this).hide();

 
//   function pastPresentFuture() 
// //PSEUDOCODE FOR FIRST FUNCTION 
  //   $(this).hide();
  //for local storage function
  // $("button").click({
  //   mouseenter: function(){
  //     $(this).css("background-color", "lightgray");
  //   },
  //   mouseleave: function(){
  //     $(this).css("background-color", "lightblue");
  //   },
  //   click: function(){
  //     $(this).css("background-color", "yellow");
  //   }
  // });


// $("button").click(function(){
//   var userInput = {

//   }
// });
// localStorage.setItem("userInput", JSON.stringify(userInput));



  
