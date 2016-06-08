// Sandbox for reading05_sandbox

// Add and remove DOM element classes.

$(document).ready(function() {
  $('#one').click(function(){ // Looks for a click on the paragraph with id one
    $(this).addClass('red'); // Gives it the class red
  });
  $('#two').click(function(){ // Looks for a click on the paragraph with id one
    $(this).removeClass('blue'); // Removes the class blue
  });
});
