// Sandbox for reading08_sandbox

// Use the "this" keyword inside an .each() to manipulate DOM elements.

$(document).ready(function() {
  $('#one').click(function() { // Waits for a click on list one
    $('li').each(function(){   // Iterates over each list item
      $('#two').append(this);  // Moves it to the other list
    });
  });
  $('#two').click(function() { // Waits for a click on list two
    $('li').each(function(){   // Iterates over each list item
      $('#one').append(this);  // Moves it to the other list
    });
  });
});
