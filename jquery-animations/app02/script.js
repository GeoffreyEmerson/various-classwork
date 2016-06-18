// Sandbox for app01
$(document).ready(function() {
  // Set up the mouseover listener and action
  $('.colorBox').on('mouseover', function(){
    var $el = $(this); // avoid multiple querying by setting a variable
    $el.stop(); // stop whatever animation is already happening on this element
    if (!$el.data('origWidth')) { // if we have not yet saved the original value...
      $el.data('origWidth', parseInt($el.css('width'))); // then save it in a jQuery data
    }
    var origWidth = $el.data('origWidth'); // pull the original data and set a variable
    if (!$el.data('origHeight')) { // same as above, but with the height setting
      $el.data('origHeight', parseInt($el.css('height')));
    }
    var origHeight = $el.data('origHeight');
    $el.animate({ // start the animation
      width: origWidth * 1.75, // set the destination as an increase of 75%
      height: origHeight * 1.75
    }, 1000); // make the animation last a full second.
  });
  // set up the reversal of the mouseover function
  $('.colorBox').on('mouseout', function(){
    var $el = $(this);
    $el.stop(); // stop any current animation
    var origWidth = $el.data('origWidth'); // grab the original size
    var origHeight = $el.data('origHeight');
    $el.animate({ // animate back to the original settings
      width: origWidth,
      height: origHeight
    }, 100); // animate back to normal over one tenth a second.
  });
});
