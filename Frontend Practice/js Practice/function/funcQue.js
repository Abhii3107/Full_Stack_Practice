// print a sum of number - 1 to n
let result = 0;
function sum(n){
    for(let i = 0; i<= n; i++){
        result += i;
    }
    return result;
}
let output = sum(10);// storing return value in output
console.log(`sum is ${output}`);

//-------------------------------------------
//cocat these string
let greet = ["hello" , "Mr" , "Abhay" , "How's" , "You" , "Doing"];

function concat(string){
    let str = "";
    for(let i = 0 ; i < string.length-1 ;i++){
        str = str +string[i] +" ";
    }
    return str;
}
console.log(concat(greet));