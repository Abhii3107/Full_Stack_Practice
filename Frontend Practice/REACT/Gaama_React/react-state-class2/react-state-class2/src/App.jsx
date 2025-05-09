import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'


function App() {
  let winCondition =(ticket) =>{
    return ticket.every((num) => num===ticket[0])
  };


  return (
    <>
     <Lottery n={2} winCondition={winCondition} />
    </>
  )
}

export default App
