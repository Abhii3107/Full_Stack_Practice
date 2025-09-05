//function - it is block of resuable code that is used to perform some specific task , and it can be called anyehere in the program

function greet() {
  console.log("welcome");
}
greet();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
print1to5();

//-------------------------
// parameter -  placeholder that take input values
// arguments - actual value we passed to function parameter

//firstname,title - parameters || abhay,singh - arguments
function Greet(firstName, title) {
  console.log(`welcome to js practice Mr ${firstName} and ${title}`);
}
Greet("Abhay", "Singh");

//Return keyword - return a value from the function after executing it further code will not be evaluated.

function sum(a, b) {
  return a + b;
  console.log("not evaluated");
}
// sum(9,10);❌  //function not print the value but returns the value so we have to expilicity print the value or store into new value
console.log(sum(9, 10));
