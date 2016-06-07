// This script starts with the shortcut version of document-ready.
$(function() {
  // Select all unordered list elements and put some html just before it in the DOM.
  $('ul').before('<p class="notice">Just updated</p>');
  // Select the list items with the class 'hot' and attaches a string as its first child.
  $('li.hot').prepend('+ ');
  // Creates a new jquery object and assigns it to a variable.
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  // Attaches that variable as a sibling after the last list item.
  $('li:last').after($newListItem);
  // End the jQuery function
});
