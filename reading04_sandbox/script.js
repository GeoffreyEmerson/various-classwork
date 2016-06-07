// Sandbox for reading04_sandbox/

// Add and remove DOM element attributes.

$(document).ready(function() {
  $('p').click(function() { // Select the p element and watch for a click.
    $(this).toggleClass('green'); // Toggle the green class when clicked.
  });
});
