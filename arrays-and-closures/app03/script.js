// Sandbox for app03

// [+0.5] .forEach()

$(function() {
  var testArray = [1,2,3,4,5];
  testArray.forEach(function(item){
    var newValue = item * 10;
    console.log(item + ' -> ' + newValue);
  });
});
