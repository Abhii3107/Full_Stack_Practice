function savetoDb(){
    return new Promise((resolve,reject) =>{
        let internetSpeed = Math.floor((Math.random()*10)) +1;
            if(internetSpeed >5){
               resolve("Sucess:Data is saved");
            }
            else{
                reject("Data is unsaved");
            }
    });
}

savetoDb()
.then((result)=>{
    console.log(result);
    console.log("data 1 is saved")
    return savetoDb()
})
.then(() =>{
    console.log("data 2 is saved");
})
.catch((err) =>{
    console.log(err);
})