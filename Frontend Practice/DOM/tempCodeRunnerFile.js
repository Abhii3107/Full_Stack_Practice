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

try{
async function h1colorful(){
     await changecolor("red",1000);
     await changecolor("indigo",1000);
     await changecolor("blue",1000);
}
}
catch(err){
     console.log(err);
}

h1colorful();