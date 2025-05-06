import { useState } from "react";
export default function LikeButton(){
       
    // function clicked(){
    //     console.log("button clicked");
    // }
     const[isLiked,setisLiked] = useState(false); // state Variable(ex-useState) is used only inside Component Function
     const[Clicks,setClicks]=useState(0);         // And we can as many use state in Single functionComponent 

     function togglelike(){
        setisLiked(!isLiked); //using toggling
        setClicks(Clicks + 1);
     }

     let styles={color:"red"};
    return(
        <div>
         <p >Clicks = {Clicks}</p>

        <p onClick={togglelike}>
          {isLiked ?(<i className="fa-solid fa-heart" style={styles}></i>) :(<i className="fa-regular fa-heart"></i>)}
        </p>
        </div>
    );
}
/* {<i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> }*/