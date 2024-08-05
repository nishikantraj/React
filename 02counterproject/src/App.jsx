import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const addValue= ()=>{
    // This will batched together because every function is doing the same work
    setCounter(counter+1);
    setCounter(counter+1);setCounter(counter+1);setCounter(counter+1);

    // This code will not be batched together and treated as single entity
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
  }
  const subValue= ()=>{
    if(counter>0)
      setCounter(counter-1);
    else
      alert('Value can not go beyond 0');
  }

  return (
    <>
      <h1>Learning Hooks</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subValue}>Subtract value</button>
      <footer>Footer value: {counter}</footer>
    </>
  )
}

export default App
