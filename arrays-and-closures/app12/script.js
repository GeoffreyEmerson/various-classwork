// Sandbox for app12

// [+1] A higher order function (HOF) that has a function F as a parameter, and calls F. Let F accept one parameter. Your app should call the HOF.

function HOF(val) {
  var F = function() {
    return val * 10;
  };
  return F();
}

$(function() {
  var result = HOF(5);
  console.log(result);
});
