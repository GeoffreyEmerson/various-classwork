// Sandbox for app06

// [+1 E.C.] Modify #3 to include a <button> and move the entire .getJSON() code into a 'click' event handler for the <button>. Verify that a button click causes data from myData.json to be printed.

$(function() {
  $('button').on('click', F);
});

function F() {
  $.getJSON('myData.json')
  .done(P);
}

function P(callBackData) {
  var divArray = callBackData.map(function(datum) {
    return $('<div>').text(datum.motto);
  });
  $('body').append(divArray);
}
