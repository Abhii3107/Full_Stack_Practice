import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import CommentForm from './CommentForm'
import Counter from './Counter'
import JokeAPI from './JokeAPI'

function App() {

  return (
    <>
   <JokeAPI />
    </>
  )
}

export default App

/*
 <Form />
    <hr></hr>
     <CommentForm />
     <hr></hr>
     <Counter />
*/