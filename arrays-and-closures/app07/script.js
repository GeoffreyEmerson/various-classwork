// Sandbox for app07

// [+1] .sort() with your own sorting function

$(function() {
  var testArray = [10,-2,16,42,5];
  console.log('testArray =',testArray);
  testArray.sort(function(firstVal,secondVal){
    console.log('firstVal =',firstVal);
    console.log('secondVal =',secondVal);
    return firstVal - secondVal;
  });
  console.log('testArray =',testArray);
});
