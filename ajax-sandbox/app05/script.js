// Sandbox for app05

// [+1 E.C.] Extend #3 to include a <button>, and change F to not call P, but register P as an event handler of the <button>. Verify that a button click causes data from myData.json to be printed.

$.getJSON('myData.json')
.done(F);

function F(callBackData) {
  $('button').on('click', function(){
    P(callBackData);
  });
}

function P(callBackData) {
  var divArray = callBackData.map(function(datum) {
    return $('<div>').text(datum.motto);
  });
  $('body').append(divArray);
}
