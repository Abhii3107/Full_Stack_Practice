import { useState } from "react";
import "./Lottery.css";
import { sum,genTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winCondition}){
    let [ticket,setTicket] = useState(genTicket(n));

    let isWinning =  winCondition(ticket);

    let buyTicket = () =>{
        setTicket(genTicket(n));
    }

    return(
        <diV>
            <h2>Lottery Game!</h2>
            <Ticket ticket={ticket}/>
          
            <br/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, yo won !"}</h3>
        </diV>
    );
 }