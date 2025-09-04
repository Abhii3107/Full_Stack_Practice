// let h1=document.querySelector("h1");

// function changecolor(color,delay,nextcolor){
//       setTimeout(()=>{
//         h1.style.color=color
//         if(nextcolor){
//             nextcolor();
//         }
//       },delay);
// }


// changecolor("red",1000,()=>{
//     changecolor("blue",1000);
// });

// changecolor("red",1000,()=>{
//     changecolor("blue",1000,()=>{
//         changecolor("green",1000);
//     });
// });           --callback hell



// promise chaining

// let h1=document.querySelector("h1");

// function changeColor(color,delay){
//         return new Promise((resolve,reject) =>{
//                  setTimeout(()=>{
//                     h1.style.color= color;
//                     resolve("color changed")
//                  },delay);
//         });
// }

// changeColor("red",1000)
// .then(()=>{
//     console.log(" redcolor changed");
//     return changeColor("orange",1000)
// })
// .then(()=>{
//     console.log("orange color is changed")
// });


// by async and await

let h1= document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            h1.style.color=color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        },delay);
    });
}


async function h1colorful(){
    try{ 
     await changecolor("red",1000);
     await changecolor("indigo",1000);
     await changecolor("blue",1000);
    }
    catch(err){
        console.log(err);
    }
    
}


h1colorful();