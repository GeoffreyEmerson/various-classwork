// Sandbox for app05

// "Use HTML to define a button and a div that says "Ancestor. Generation 0", and jQuery to add a 'click' handler to the button. The handler should create a new div inside the existing div, the new div should say "generation 1". Each click should add a child div to the previously created div, but the child div should contain the generation number, which increments by one for each generation."

$(document).ready(function() {
  $('button').on('click', newDiv);
});

var generation = 0;

function newDiv(){
  generation++;
  var newHtml = $('<div>');
  newHtml.text('Generation ' + generation);
  $('div:last').append(newHtml);
}
