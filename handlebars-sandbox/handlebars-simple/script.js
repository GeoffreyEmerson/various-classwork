// Sandbox for handlebars-simple
$(document).ready(function() {

  handleMyBars();

});

function handleMyBars() {
  var myName = {
    name: 'Johnny'
  };
  var theTemplate = $('#template').html();
  var compileThis = Handlebars.compile(theTemplate);
  var inevitableResult = compileThis(myName);
  $('#putItHere').append(inevitableResult);
}
