// Sandbox for app03

// Use jQuery's .getJSON() to load myData.json,
// and use .done() to set up a function F to run when the data is read.

$.getJSON('myData.json')
  .done(F);

function F(callBackData) {
  P(callBackData);
}

// F should call a function "P" to print the contents of the entire array of objects using a loop or .map().

function P(callBackData) {
  var divArray = callBackData.map(function(datum) {
    return $('<div>').text(datum.motto);
  });
  $('body').append(divArray);
}
