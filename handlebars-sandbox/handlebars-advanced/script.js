// Sandbox for handlebars-advanced
$(document).ready(function() {

  var theTemplate = $('#template').html();            // Grab the template
  var compileThis = Handlebars.compile(theTemplate);  // Make the Handlebars function
  var inevitableResult = compileThis(racerList);      // Feed the data object to the function
  $('#offToTheRaces').append(inevitableResult);       // Append the result to the DOM

});
