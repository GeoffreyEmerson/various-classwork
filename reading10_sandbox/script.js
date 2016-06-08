// Sandbox for reading10_sandbox

//Web app that has an ordered list of 9 list items, and uses jQ to change every 3rd child to have a green background. Do not use ids or classes, only use "bare" HTML tags.

$(document).ready(function() {
  // Uses the formula 'every three children' to set the style to a green background.
  $('li:nth-child(3n)').css('background-color','green');
});
