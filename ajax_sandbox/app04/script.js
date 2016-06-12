// Sandbox for app04

// Modify #3 to use jQuery's .ajax() to load myData.json, instead of using .getJSON(). Pay attention to the pieces of code you need to make .ajax() behave like .getJSON().

var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status == 200) {
    var responseObject = JSON.parse(xhr.responseText);
  }
  callBackFunction(responseObject);
};

xhr.open('GET', 'myData.json');
xhr.send(null);

function callBackFunction(callBackData) {
  printResult(callBackData);
}

function printResult(passedData) {
  passedData.map(function(mapData) {
    var newDiv = $('<div>').text(mapData.motto);
    $('body').append(newDiv);
  });
}
