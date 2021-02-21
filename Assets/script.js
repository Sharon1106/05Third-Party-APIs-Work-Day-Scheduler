 // used moment(); function to capture todays info
 var todaysDate = moment();
 //todays moment is displayed on the id tag currentDay from html and displayed on screen
$("#currentDay").text(todaysDate.format('[Hello, today is ]dddd, MMMM Do')); 