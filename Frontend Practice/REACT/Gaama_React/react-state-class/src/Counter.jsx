import { useState } from "react";


export default function Counter() {
    // let arr=useState(10);
    // console.log(arr);    // it returns - araay -(2) [10, ƒ] so we disconstruct it
    //  let [stateVariable (1),setStateVariable(2)] =useState(intialValue(ex-10)); // (2) updater function- trigger rerender

    let[count,setCount]=useState(0); // intialization

    let inCount= () =>{
         setCount(count+1); 
        //  console.log(count);  // always one short of decalre value bcause , when it rerender it exexute all code again only ignore (usesate intialization code)
                                 // and state value updated on renderstage
    }

    return(
        <div>
           <h3>Count ={count}</h3>
           <button onClick={inCount}>Increase Count</button>
        </div>
    );  
}


/*--------------------------------------------------------------------------------------------------- */
 //before UseState

// export default function Counter() {
// let count =0
    // function isCount(){
    //     count +=1;
    //     console.log(count);
    // }
//     return(
//         <div>
//            <h3>Count = {count}</h3>
//            <button onClick={isCount}>Increase Count</button>
//         </div>
//     );  
// }
