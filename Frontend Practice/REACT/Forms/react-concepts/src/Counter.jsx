import { useState , useEffect } from "react";

export default function Counter(){
    let[countX,setCountX] = useState(0);
    let[countY,setCountY] = useState(0);
    
    let incCountX =() =>{
        setCountX((currCount) => currCount + 1);
    }
    let incCountY =() =>{
        setCountY((currCount) => currCount + 1);
    }

    // useEffect(function sideEffect() {           // useEffect(setup ,dependencies)  setup-function-sideeffect
    //  console.log("this is side effect");     //to kisi bhi state variable mai kuch bhi change ho gya , koi bhi component mai chota sa change , mtlb kb bhi render hoga to side effect execute hoga
    // }); 

    useEffect(function sideEffect() {          // when we want only componentX changed then sideeffect is executed otherwise not
        console.log("this is side effect");     
       },
      [countX]
    ); 
    
    // useEffect(function sideEffect() {        // when we pass empty array , so at  only 1st render side Effect performed 
    //     console.log("this is side effect");     
    //    },
    //   []
    // ); 

    return(
        <div>
            <h3>Count ={countX}</h3>
            <button onClick={incCountX}>+1</button>
            <br /><br />
            <h3>Count ={countY}</h3>
            <button onClick={incCountY}>+1</button>
        </div>
    );
}