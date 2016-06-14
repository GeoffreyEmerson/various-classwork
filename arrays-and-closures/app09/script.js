// Sandbox for app09

// .each()

$(function() {
  $('div').each(function(){
    $(this).text(this.classList);
  });
});
