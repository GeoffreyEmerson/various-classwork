// Sandbox for reading06_sandbox

// Get and set a DOM element's CSS properties.

$(document).ready(function() {
  $('p').click(function() {
    $css = $(this).css('font-family'); // Get the font css of the element clicked
    $('h1').css('font-family', $css); // Put that font css on the heading
  });
});
