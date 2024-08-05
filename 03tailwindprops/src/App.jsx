import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {

  return (
    <>
     <h1 className='bg-black text-cyan-400 mb-3 text-4xl'>Learning React with Tailwind</h1>
     <Card userName="Cloe" textBtn='Click Me'/>
     <Card userName="Tina"/>
    </>
  )
}

export default App
