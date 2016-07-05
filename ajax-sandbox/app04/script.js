// Sandbox for app04

// Modify #3 to use jQuery's .ajax() to load myData.json, instead of using .getJSON(). Pay attention to the pieces of code you need to make .ajax() behave like .getJSON().

$.ajax({
  url: 'myData.json',
  type: 'GET',
  dataType: 'json'
})
.done(F);

function F(callBackData) {
  P(callBackData);
}

function P(callBackData) {
  var divArray = callBackData.map(function(datum) {
    return $('<div>').text(datum.motto);
  });
  $('body').append(divArray);
}
