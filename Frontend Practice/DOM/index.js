// let btns= document.querySelectorAll("button");
// function sayhello(){
//     console.log("hii");
// }
// // for(btn of btns){
// //     btn.addEventListener("click",sayhello);
// // };
//   btns.addEventListener("click",sayhello);




// 🔹 What is a Callback in JavaScript?
// A callback is a function passed as an argument to another function, which is then executed inside that function.

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// function processUser(callback) {
//   const userName = "Abhay";
//   callback(userName);  // calling the callback
// }

// processUser(greet);

// Output: Hello, Abhay!

// ex-2
// function sum(a,b){
//     console.log(a+b);
// }

// function calclutaor(a,b,callBack){
//           callBack(a,b);
// }
// calclutaor(1,2,sum); -op- 3

//-------------------------------------------------------------------------------------------------------

// let h1=document.querySelector("h1");

// function changecolor(color,delay,nextcolor){
//     setTimeout(()=>{
//         h1.style.color=color;
//     if(nextcolor){
//         nextcolor();
//     }
// },delay);
// }

// changecolor("red",2000,() => {
//     changecolor("blue",2000);
// });

// changecolor("red",2000,() => {  
//     changecolor("blue",2000,() => {   // callBack Hell
//     changecolor("orange",2000);
// });
// });

// to prevet callback hell, we use promises,async,await



//Promises - with chaining
// let h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             h1.style.color =color;
//             resolve("colorchanged");
//         },delay);
//     })
// }
// changeColor("red",1000)
// .then(()=>{
//     console.log("red color is completed");
//     return changeColor("orange",1000);
// })
// .then(() => {
//     return changeColor("blue",2000);
// })
// .catch((err)=>{
//     console.log(err);
// })
/*------------------------------------------------------------------------ */

// async- to make code compact work as promises
// async function greet(){
//     return "hello";  
// }

// greet()
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })

//await- jb tk ye exexuted nhi hoga tb tk aage ka execution nhi hoga , 
//uses with only async func

function getNum(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            let num =Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    })
}

// async function demo(){
// getNum();
// getNum();
// getNum();
// }
//                   // ek sath teeno dedega at 1 sec
// demo();

async function demo(){
   await getNum(); // 1st execute this after,
   await getNum(); // this  2nd will executed,
   await getNum(); // then this
}
demo();

//change colour by async and await
let h1= document.querySelector("h1");

 function changecolor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            h1.style.color=color;
            console.log(`color is changed to ${color}`);
            resolve("color changed");
        },delay);
    });

}

async function h1colorful(){
   try{
     await changecolor("red",1000);
    await changecolor("blue",1000);
    await changecolor("Green",1000);
   }
   catch(err){
      console.log(err);
   }
}

h1colorful();
