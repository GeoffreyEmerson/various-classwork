// Sandbox for app08

// [+2 E.C.] Chain together .map(), .filter(), and .reduce()

$(function() {
  var testArray = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
  console.log('testArray =',testArray);
  var result = testArray.map(mathSomething).filter(onlyPositive).reduce(minVal);
  console.log('result =',result);
});

function mathSomething(unused,val) {
  return Math.pow(-3,val);
}

function onlyPositive(val) {
  return val > -1;
}

function minVal(firstVal,secondVal) {
  return firstVal < secondVal ? firstVal : secondVal;
}
