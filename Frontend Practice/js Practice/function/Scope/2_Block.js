//Blockscope - variable that decalred inside curly braces(blocks) are cannot be accessible from outside of block

function block(){
    let a = 10;
    {
        console.log(a); 
    }
}
let executed = block();
console.log(a) //ReferenceError: a is not defined
