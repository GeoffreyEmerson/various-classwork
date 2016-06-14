// Sandbox for app11

// [+1 E.C.] .toArray(), then use a JavaScript array method on the result.

$(function() {
  var arrayOfDivs = $('div').toArray();
  console.log(arrayOfDivs);
  arrayOfDivs.forEach(function(div){
    $(div).text('I\'ve been processed!');
  });
});
