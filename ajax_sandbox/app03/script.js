// Sandbox for app03

// Use jQuery's .getJSON() to load myData.json,
// and use .done() to set up a function F to run when the data is read.

$.getJSON('myData.json')
  .done(callBackFunction);

function callBackFunction(callBackData) {
  printResult(callBackData);
}

// F should call a function "P" to print the contents of the entire array of objects using a loop or .map().

function printResult(passedData) {
  passedData.map(function(mapData) {
    var newDiv = $('<div>').text(mapData.motto);
    $('body').append(newDiv);
  });
}
