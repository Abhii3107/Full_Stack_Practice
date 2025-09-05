//Decalred outside of any function or block , it can accesible anyehere in the code
let sum= 23;
function calSum(a,b){
     console.log(sum) // gloal scope
}
calSum(4,5);

//--------
// specificity of function scope is higher than global one
let a =10;
function same(){
    let a= 20;
    console.log(a); // function scope used
}
same();