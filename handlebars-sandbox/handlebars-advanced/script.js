// Sandbox for handlebars-advanced
$(document).ready(function() {

  var theTemplate = $('#template').html();
  var compileThis = Handlebars.compile(theTemplate);
  var inevitableResult = compileThis(racerList);
  $('#offToTheRaces').append(inevitableResult);

});
