// Sandbox for app05

// [+1 E.C.] Extend #3 to include a <button>, and change F to not call P, but register P as an event handler of the <button>. Verify that a button click causes data from myData.json to be printed.

$.getJSON('myData.json')
  .done(callBackFunction);

function callBackFunction(callBackData) {
  $('button').on('click', function(){
    printResult(callBackData);
  });

}

function printResult(passedData) {
  passedData.map(function(mapData) {
    var newDiv = $('<div>').text(mapData.motto);
    $('body').append(newDiv);
  });
}
