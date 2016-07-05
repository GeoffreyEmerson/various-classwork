// Sandbox for app01

// Create an app that creates an object (call it "X") with at least two properties and one method.

var X = {
  name: 'Geoff',
  state: 'Caffeinated',
  sayHello: function() {
    return 'Hello!';
  }
};

// Use the built-in Javascript object "JSON" to generate a JSON string from X.

var myJsonString = JSON.stringify(X);

// Use .replace(), a method of all JS String objects, to change one of the keys inside the JSON string.

var replacedContent = myJsonString.replace(/Caffeinated/g, 'Sleepy');

// Then use the JSON object to create a new object "Y" from the modified JSON string

var Y = JSON.parse(replacedContent);

// print the contents of Y (use Y when you print, and not the modified JSON string).

console.log(Y);
