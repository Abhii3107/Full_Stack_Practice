import { useState } from "react";

export default function Form(){
// let [fullName,setFullName]= useState("Abhay");

// let[userName,setUserName] = useState("");

// let handleNameChange =(event) =>{
// //console.log(event.target.value);
// setFullName(event.target.value);
// };

// let userNameChange =(event) =>{
//     console.log(event.target.value);
//     setUserName(event.target.value);
//     };

let [formData,setFormData] = useState({
    fullName : "",
    userName :"",
    password :""
});

let handleInputChange =(event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) =>{                 //object ke sath jb bhi deal krte hai to shirf objet ke key ko change krna jaruri nhi hota, blki purani object   ko reconstruct krke nyi object send krni prti hai  tbhi react mai change valid mana jata hai object ke case mai 
      //  currData[fieldName] = newValue;      //[variable]- computed property Name
      //  return{...currData};              //reconstructing whole object into new object by spread   
        return{...currData ,[fieldName] :newValue};    // same thing - currdata ke fieldname mai new value assign ho rhe
    }) 
}; 

let handledSubmit = (event) =>{
   event.preventDefault();
   console.log(formData);
   setFormData({
        fullName : "",
        userName :"",
        password :""
   });
};
    
return(
    <form onSubmit={handledSubmit}>
        <label htmlFor="fullName">FullName :</label>
        &nbsp; &nbsp;
        <input  id="fullName" placeholder="write your fullname..." type="text" value={formData.fullName} onChange={handleInputChange}
        name="fullName"
        ></input>

        <br></br><br></br>
        <label htmlFor="userName">UserName :</label>
        &nbsp; &nbsp;
        <input  id="userName" placeholder="write your username..." type="text" value={formData.userName} onChange={handleInputChange}
        name="userName"
        ></input>

        <br /><br></br>
        &nbsp; &nbsp;
        <label htmlFor="password">Password :</label>
        <input  id="password" placeholder="write password..." type="password" value={formData.password} onChange={handleInputChange}
        name="password"
        ></input>
        <br></br><br></br>
        <button>Submit</button>
    </form>
);
} 
//--------------------------------------------------------------------------------------------------------

// ✅ Summary of your code:

// The input’s value is not handled by the browser automatically.

// React (fullName) controls what’s inside the input.

// Every time you type something, handleNameChange is called, updating the state → and React re-renders the input with the new value.

// This is exactly what a "controlled component" means in React.
 /*
 
 
 */