//Higher Order Function
/*A function that does one or both */
/*
1. that take function as a argument
2. Return a function
*/

function multipleGreet(func,n){
  for(let i=1 ; i<=n;i++ ){
    func();
  }
}

let Greet = function (){
      console.log("India ");
}

multipleGreet(Greet, 10);


//return a function

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2); 
console.log(double(5)); 