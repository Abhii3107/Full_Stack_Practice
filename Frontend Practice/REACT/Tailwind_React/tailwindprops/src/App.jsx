import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-700 text-white p-5 rounded-2xl" >Tailwind test</h1>
      
<figure class="bg-slate-100 rounded-xl p-8 blue:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?semt=ais_hybrid&w=740" alt="" width="384" height="512"/> 
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Abhay Singh
      </div>
      <div>
        Learner,India
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default App

//in jsx , image tag is closed <img/>