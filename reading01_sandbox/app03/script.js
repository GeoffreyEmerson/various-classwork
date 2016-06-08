// Sandbox for reading03_sandbox

// Visually show the difference between .html() and .text() when setting content.

$(document).ready(function() {
  // The html method interprets html markup
  $('#one').html('The html method interprets <em>html markup!</em>');
  // The text method does not
  $('#two').text('The text method <em>does not!</em>');
});
