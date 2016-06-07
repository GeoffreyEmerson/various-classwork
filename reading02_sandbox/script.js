// Sandbox for reading02_sandbox

// Show the difference between .html() and .text() when getting content.

$(document).ready(function() {
  // The html method interprets html markup
  $('#one').html('The html method interprets <em>html markup!</em>');
  // The text method does not
  $('#two').text('The text method <em>does not!</em>');
});
