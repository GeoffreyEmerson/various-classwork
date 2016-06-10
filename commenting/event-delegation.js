$(function() {                                                // Short version of document.ready
  var listItem, itemStatus, eventType;                        // set up a few variables

  $('ul').on(                                                 // Select the unorderd list and set a listener
    'click mouseover',                                        // Activate the listener when click or mouseover happens
    ':not(#four)',                                            // Filter out the element with the id 'four'
    {status: 'important'},                                    // Send the function some custom info
    function(e) {                                             // Begin the anonymous function
      listItem = 'Item: ' + e.target.textContent + '<br />';  // Set the variable to be some text with data from the event
      itemStatus = 'Status: ' + e.data.status + '<br />';     // Set variable to the custom info passed in
      eventType = 'Event: ' + e.type;                         // Set the variable to reflect the event type that triggered the function
      $('#notes').html(listItem + itemStatus + eventType);    // Select the element with id 'notes' and set the contents to the variables that have been assembled
    }                                                         // End of anonymous function
  );                                                          // End of event listener declaration

});                                                           // End of JS code
