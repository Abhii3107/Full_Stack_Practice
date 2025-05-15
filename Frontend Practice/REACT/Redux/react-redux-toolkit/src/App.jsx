
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount,setAmount] = useState(0);

 const count = useSelector((state) =>state.counter.value); //fetching data from slice
 const dispatch=useDispatch(); // to performed action we use dispatch hooks

  function handleIncrementClick(){
       dispatch(increment());
  }

  function handleDecrementClick(){
         dispatch(decrement());
  }
    function handleResetClick(){
         dispatch(reset());
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
       <div>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count :{count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br></br>
        <br></br>
        <button onClick={handleResetClick}>Reset</button>
       </div>
       <br>
       </br>
       <input type='Number' 
       value={amount}
        placeholder='Enter Amount'
        onChange={(e)=> setAmount(e.target.value)}>
       </input>
       <br>
       </br>
       <button onClick={handleIncAmountClick}>Inc by Amount</button>
    </>
  )
}

export default App
