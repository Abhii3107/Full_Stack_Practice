import { useState } from "react";

export default function LudoBoard(){
      let[moves,setMoves] = useState({blue:0 ,red :0 ,Green :0 ,Yellow :0});// for object
     
      let [arr,setArr] = useState(["oldarray"]); // passing array
      //FOR Blue
      let updateBlue =() =>{
        console.log(`moves.blue ${moves.blue}`);

        setMoves((prevMoves) =>{                              //  setMoves({...moves, blue : moves.blue+1}); 
            return {...prevMoves, blue : prevMoves.blue+1}; 

        });

        // for array
        setArr((prearr) =>{                              //  setMoves({...moves, blue : moves.blue+1}); 
            return [...prearr ,"bluemoves" ];
            console.log(arr); 

        });

        // same for Red, green , yellow

    }
    return(
        <div>
            <p>Game Begin!</p>
            <p>{arr}</p>
            <div>
                <p>Blue moves ={moves.blue} </p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>

                <p>Red moves = {moves.red} </p>
                <button style={{backgroundColor : "red"}}>+1</button>

                <p>Yellow moves = {moves.Green} </p>
                <button style={{backgroundColor : "yellow",color:"black"}}>+1</button>

                <p>Green moves = {moves.Yellow} </p>
                <button  style={{backgroundColor : "Green"}}>+1</button>
            </div>
        </div> 
    );
}