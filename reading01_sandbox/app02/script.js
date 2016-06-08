// Sandbox for reading02_sandbox

// Show the difference between .html() and .text() when getting content.

$(document).ready(function() {
  // Get the text in the first example sentence with the html method.
  $testHtml = $('#example').html();
  // The text method does not
  $testText = $('#example').text();
  // Output the result of the .html method
  $('#html-test').text($testHtml);
  // Output the result of the .text method
  $('#text-test').text($testText);
});
