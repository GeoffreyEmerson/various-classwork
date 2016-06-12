// Sandbox for app06

// [+1 E.C.] Modify #3 to include a <button> and move the entire .getJSON() code into a 'click' event handler for the <button>. Verify that a button click causes data from myData.json to be printed.

$(function() {
  $('button').on('click', doTheJsonThing);
});

function doTheJsonThing() {
  $.getJSON('myData.json')
    .done(printResult);
}

function printResult(passedData) {
  passedData.map(function(mapData) {
    var newDiv = $('<div>').text(mapData.motto);
    $('body').append(newDiv);
  });
}
