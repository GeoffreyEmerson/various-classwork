// Sandbox for app12

// [+1.5] A HOF that returns a closure. Your app should call the HOF, then your app should use the closure.

function HOF(secret) {
  var closedFunc = function(val) {
    return val * secret;
  };
  return closedFunc;
}

$(function() {
  var closure = HOF(7);
  var result = closure(6);
  console.log(result);
});
