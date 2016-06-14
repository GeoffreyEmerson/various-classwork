// Sandbox for app02

// .reverse() and concat()

$(function() {

  var testArray = [1,2,3,4,5];
  console.log(testArray);
  testArray.reverse();
  console.log(testArray);
  var array2 = [5,4,3,2,1];
  var catted = testArray.concat(array2);
  console.log(catted);
});
