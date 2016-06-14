// Sandbox for app05

// [+1] .filter()

$(function() {
  var testArray = [-3,-2,-1,0,1,2,3];
  console.log(testArray);
  var newArray = testArray.filter(function(value){
    return value > 0;
  });
  console.log(newArray);
});
