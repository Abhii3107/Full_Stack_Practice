//1.function scope
//variable defined inside the function is cannnot accesible to outside the function
function calSum() {
    let sum = 28;
    console.log(sum); //accesible inside the function
}
console.log(sum) // uncaught refernece error

