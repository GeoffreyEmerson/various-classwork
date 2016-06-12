// Sandbox for app08

// Use .find() on jQuery objects, then comment on how .filter() and .find() differ

$(document).ready(function() {
  $('ul').find('a:even').css('text-decoration', 'none');
});

// .filter() goes through the given results and removes them from the list,
// while .find() searches for matching elements in the dom under the given
// starting element(s).
