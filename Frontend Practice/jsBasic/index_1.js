// let age=33;
// age =23+1;
// console.log(age);

//  age-=20;
// console.log(age);

// Boolean
Boolean("coding">"a") //true
Boolean("") //false

//variable to num
//parseInt- return a whole number
parseInt("-5.45"); //op-5 type - Number
parseInt("10 coding"); // 0p-10 (Number)
parseInt(" coding 10") // op-Nan

// string coercision - left to right
let temp=8+4 +"coding"; 
console.log(temp); // 12coding

// Methods -> actions that can be performed on object

//toString() -No. to string
let x= 25;
x.toString();
console.log(x); 

//toFixed() - return a string with specifed no.. of decimal
let num=10.347;
num.toFixed(0); //op-10
num.toFixed(2); //op-10.34;

//toPrecision - return a string , with no. written a specified length
let num1=10.58;
num1.toPrecision(3); //op- 10.6  (cross 0.5 so 10.6)
num1.toPrecision(2); // op-11 (nearset)
num1.toPrecision(5); //op-10.580

// automatic type conversion - doing operation on two string - converts into Number
let a="10";
let b="25";
let z = a*b; // op-250

/*In js,
null- non-existence object or address;
data type of null is object

type of nan- number
not a number
*/

//SWitch syntax
/*
let color="red";
Switch{
case "red":console.log("stop");
break;
case "yellow": console.log("slow down")
default:
    console.log("break light")
}
*/