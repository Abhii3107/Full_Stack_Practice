//Methods -  actions that can be performed on an object
const calculator = {
  num: 55,
  add: function(a, b) {
    console.log(a + b);
  },
  sub :function (a,b) {
    console.log(a-b);
  },
  mul: function(a,b){
    console.log(a*b);
  },
  divide: function(a,b){
    console.log(b/a)
  }
};

console.log(calculator.num);
calculator.add(10,20);

// Definition:
// A method is a function stored as an object's property. When called as obj.method(),
// a regular function's `this` refers to that object. Arrow functions do not bind `this` and
// therefore are usually not suitable as object methods.

const person = {
  name: "Alice",

  // regular method: 'this' refers to the person object
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },

  // method that mutates internal state
  setName(newName) {
    this.name = newName;
  },

  // arrow function as a "method" — demonstrates that `this` is not the object here
  shout: () => {
    console.log("arrow this:", this); // likely undefined (strict mode) or the outer scope
  },
};

// Example usage:
person.greet(); // Hi, I'm Alice
person.setName("Bob");
person.greet(); // Hi, I'm Bob
person.shout(); // shows arrow function's `this` behavior
