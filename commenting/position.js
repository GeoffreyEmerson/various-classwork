$(function() {  // Wait for document to be ready
  var $window = $(window);  // Select the window element and save it to a variable
  var $slideAd = $('#slideAd'); // Select the slideAd element and save it to a variable
  // Calculat the 'end zone' by looking at the position of the footer and the browser window height
  //  and subtracting a set amount of pixels where the hidden element should appear
  var endZone = $('#footer').offset().top - $window.height() - 500;

  $window.on('scroll', function() { // set the listener to trigger every time the user scrolls

    if (endZone < $window.scrollTop()) {  // Determine if the window is in the right spot.
      // Note: Both options contain animations because a user might be scrolling *out* of the
      //  end zone. So any time the window is determined to not be in the right position,
      //  the animation will be called to move the hidden element out of view.
      $slideAd.animate({ 'right': '0px' }, 250);  // Animate the element into view
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250); // Stop any current animation
                                                               //  and start the exit animation
    } // End of the window position check decision

  }); // End of the event listener declaration

}); // End of the JS code
