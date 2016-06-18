// Sandbox for app01
$(document).ready(function() {

  // Set up the mouseover listener and action
  $('.colorBox').on('mouseover', windUp);
  // set up the reversal of the mouseover function
  $('.colorBox').on('mouseout', unWind);

});

function windUp() {
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
    height: origHeight * 1.75,
    lineHeight: 350,
    borderRadius: 360,
    backgroundColor: '#aa0000', // Had to add a new jquery library to get colors to animate
    borderSpacing: 360 // As far as I can tell, this is only used because it probably won't affect anything else
  }, {
    step: function(now,fx) {
      $(this).css('transform','rotate(' + now + 'deg)'); // I think this only pulls the state from the last element styled
    },
    duration: 1000
  });
};

function unWind() {
  var $el = $(this);
  $el.stop(); // stop any current animation
  var origWidth = $el.data('origWidth'); // grab the original size
  var origHeight = $el.data('origHeight');
  $el.animate({ // animate back to the original settings
    width: origWidth,
    height: origHeight,
    lineHeight: 200,
    backgroundColor: '#0000aa',
    borderRadius: 0,
    borderSpacing: 0
  }, {
    step: function(now,fx) {
      $(this).css('transform','rotate(' + now + 'deg)'); // I think this only pulls the state from the last element styled
    },
    duration: 500
  });
};

function windUp2() {
  var $el = $(this); // avoid multiple querying by setting a variable
  $el.stop(); // stop whatever animation is already happening on this element
  $el.animate({ // start the animation
    backgroundColor: '#aa0000',
  }, 2000 );
};

function unWind2() {
  var $el = $(this);
  $el.stop(); // stop any current animation
  $el.animate({ // animate back to the original settings
    backgroundColor: '#0000aa',
  }, 1000 );
};
