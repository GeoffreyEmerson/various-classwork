// Sandbox for reading07_sandbox

// Use .remove(). Show how .append(), and .appendTo() differ.

$(document).ready(function() {
  $('li').one('click',swaps);
});

function swaps() {
  $item = $(this).clone(); // This makes a clone of the element, because just
                           // assigning the object to a variable isn't making a copy
  $(this).remove(); // Removes the element from the DOM
  $item.appendTo('#build'); // Attaches the clone to the second list
  $('#choice').append($(this)); // Appends the original element to the end of the first list
  $(this).one('click',swaps); // Resets the click detection.
}
