// Sandbox for app04

// [+1] .map()

$(function() {
  var testArray = [1,2,3,4,5];
  console.log(testArray);
  var newArray = testArray.map(function(index,value){
    return value * index;
  });
  console.log(newArray);
});
