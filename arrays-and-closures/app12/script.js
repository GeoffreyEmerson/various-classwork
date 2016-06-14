// Sandbox for app12

// [+1] A higher order function (HOF) that has a function F as a parameter, and calls F. Let F accept one parameter. Your app should call the HOF.

function hof(secret) {
  var closedFunc = function(val) {
    return val * secret;
  };
  return closedFunc;
}

$(function() {
  var newFunc = hof(10);
  var result = newFunc(5);
  console.log(result);
});
