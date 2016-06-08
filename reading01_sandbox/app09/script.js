// Sandbox for reading09_sandbox

//+1 E.C.: Show how to use $(this) to convert plain JavaScript DOM elements to jQuery DOM elements.

$(document).ready(function() {
  $('#one').click(function() { // Waits for a click on list one
    $('li').each(function(){   // Iterates over each list item
      $(this).appendTo('#two');// Make 'this' into a jquery object and moves it to the other list
    });
  });
  $('#two').click(function() { // Waits for a click on list two
    $('li').each(function(){   // Iterates over each list item
      $(this).appendTo('#one');// Make 'this' into a jquery object and moves it to the other list
    });
  });
});
