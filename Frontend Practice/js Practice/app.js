// let h1=document.querySelector("h1");

// function changecolor(color,delay){
// return new Promise((resolve,reject) =>{  //return newpromises()
//     setTimeout(()=>{
//        h1.style.color = color;
//        resolve("color changed")
//     },delay);
// })
// }

// changecolor("red",1000)
// .then(() => {
// console.log("red color was ccompleted");
// return changecolor("orange",1000);
// })
// .then(() => {
//     console.log("orange color was ccompleted");
//     return changecolor("blue",1000);
//     })

// let h1=document.querySelector("h1");

// function changecolor(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             h1.style.color= color;
//             resolve("color changed");
//         },delay);
//     })
// }

// async function h1colorful() {
//     await changecolor("red",1000).then(console.log(resolve));
//     await changecolor("orange",1000);
//     await changecolor("yellow",1000);
//     await changecolor("green",1000);
//      changecolor("violet",1000);
// }

// async function h1colorful() {
//     console.log(await changecolor("red", 1000)); // to print resolve statement
//     console.log(await changecolor("orange", 1000));
//     console.log(await changecolor("yellow", 1000));
//     console.log(await changecolor("green", 1000));
//     console.log(await changecolor("violet", 1000));
// }

// h1colorful();


let url="https://dog.ceo/api/breeds/image/random";

fetch(url)
.then((res) =>{
    console.log(res);
    return res.json();
})
.then((data1)=>{
    console.log("data 1 =" ,data1);
    return fetch(url);
})
.then((res)=>{
return res.json();
})
.then((data2)=>{
console.log("data 2 =",data2);
})
.catch((err) =>{
    console.log("error is =", err);
})