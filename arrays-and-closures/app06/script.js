// Sandbox for app06

// [+1] .reduce()

$(function() {
  var testArray = [10,-2,16,42,5];
  console.log('testArray =', testArray);
  var getMax = testArray.reduce(function(previousValue,currentValue,currentIndex,array){
    var max;
    console.log('previousValue =', previousValue);
    console.log('currentValue =', currentValue);
    if (previousValue > currentValue) {
      max = previousValue;
    } else {
      max = currentValue;
    }
    return max;
  });
  console.log('testArray =', testArray);
  console.log('getMax =', getMax);
});
