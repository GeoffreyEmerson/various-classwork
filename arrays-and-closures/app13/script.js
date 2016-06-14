// Sandbox for app13

// [+1] A HOF that returns a function G. G accepts two parameters. Your app should call the HOF, then your app should use the returned function.

function HOF() {
  var G = function(val1,val2) {
    return val1 * val2;
  };
  return G;
}

$(function() {
  var funcG = HOF();
  var result = funcG(6,5);
  console.log(result);
});
