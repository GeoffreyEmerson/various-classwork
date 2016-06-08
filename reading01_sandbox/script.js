// Sandbox for reading01_sandbox

// App that includes JavaScript code where:
    // Several JS instructions run before the document has fully loaded.
    // JS code that uses .ready() to run several JS instructions after the document has loaded.

$('#one').hide(); // tries to hide the first paragraph
$('#two').addClass('red'); // tries to turn the second paragraph red
$('#three').toggleClass('solid-border');; // tries to give the third paragraph a border box

// This section waits for the document to finish loading. These all work.
$(document).ready(function() {
  $('#one').hide(); // hides the first paragraph
  $('#two').addClass('red'); // turns the second paragraph red
  $('#three').toggleClass('solid-border');; // gives the third paragraph a border box
});
