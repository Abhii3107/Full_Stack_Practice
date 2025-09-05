//Lexical scope
//In nested function ,
//A variable declared in outer function can be accesible inside inner function 
// but , oppoiste is not true

function outer(){
    let a= 10
    function inner(){
        let b=5;
        let result = a+ b ;
        console.log(result);
    }
    inner();
}

outer();