// Sandbox for app02

// Use a constructor and a loop to create an array of objects,

function objectFab() {
  this.name = 'Jack';
  this.motto = 'All work and no play makes Jack a dull boy';
  this.sayMotto = function() {
    return this.motto;
  };
};

var bunchaObjects = [];

for (var i = 0; i < 100; i++) {
  bunchaObjects.push(new objectFab());
}

// then stringify the entire array

var strigifiedArray = JSON.stringify(bunchaObjects);

// and print the string to the console or DOM.

console.log(strigifiedArray);

//Copy-and-paste the entire JSON string from that "print out" into a new file "myData.json" that you save on your laptop.
