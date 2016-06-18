// Sandbox for reading04_sandbox/

// Add and remove DOM element attributes.

$(document).ready(function() {
  $('p').click(function() { // Select p elements and watch for a click.
    $('[hidden]').removeAttr('hidden'); // Remove the hidden attribute of anything hidden.
    $(this).attr('hidden', 'hidden'); // Make the clicked item hidden.
  });
});
