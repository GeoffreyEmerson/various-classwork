// Sandbox for app01

// [+0.5] .push(), .pop(), .shift(), and .unshift()

$(function() {
  var testArray = [1,2,3,4,5];
  console.log(testArray);
  testArray.push(42);
  console.log(testArray);
  var popped = testArray.pop();
  console.log(popped);
  console.log(testArray);
  var shifted = testArray.shift();
  console.log(shifted);
  console.log(testArray);
  testArray.unshift(-7);
  console.log(testArray);
});
