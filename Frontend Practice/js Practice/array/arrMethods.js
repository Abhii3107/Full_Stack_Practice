//Array - Linear collection of multiple values
//Mutable- we can change in it

//Method - Action that can performed on any object.

//Array method
/*
1.Push() -> add to end
2.Pop() ->  delete from end and returns it.
3.unshift() -> add to start
4.Shift() -> delete from start and returns it
*/

let alpha = ["a", "b", "c", "d"];

alpha.push("e");       // clg(alpha.push("e")); - its return length -> 6
console.log(alpha);    // we can directly access- console.log(alpha.push("e") , alpha)

alpha.pop();
console.log(alpha);

alpha.unshift("A");
console.log(alpha);

alpha.shift("A");
console.log(alpha);

//-----------------------
/*

5.includes( a ) - return true if a exist in array
6.concat() - merge 2 array
7.reverse
8.indexof(a) - tell what is index of a
*/

const colours = ["red" , "Green" ,"Blue"];

let result = colours.includes("yellow");
console.log(result); //false

const more = ["orange" , "Pink"];
let newColours = colours.concat(more); // it does not change in old array(primary one) but it create a new one(secondary)
console.log(newColours); 

console.log(colours);
//-----------------------------------------------------

/*
Slice- copies a portion of array

slice(start , end-1)
*/

let cars = ["audi" , "Bmw" , "toyata"];
cars.slice(1,2);//bmw

//----------------------------------------------------

/*splice - remove/replace/add elements in a place
it do not make copies , but change in original array

spilce(start index, delete count , adding items0...N);
*/

cars.splice(2,1); // 3 sere element se 1 delete krna
console.log(cars);

cars.splice(1,1,"Rolls Royce" , "Porsche" ,"Aston martin");
console.log(cars);

/*sort - sorts an array (asce to desc) , arrange in alphabetical , if there is number then change in upc code(strings) then arrange  */

let days =["sun" ,"Mon" ,"Tue" ,"wed"];
let newDays=days.sort();
console.log(newDays);

let num =[4,45,74,34,8,1,45];
let sortNum = num.sort();
console.log(sortNum);
