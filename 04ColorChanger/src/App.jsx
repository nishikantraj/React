import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const savedColor = localStorage.getItem('bgColor') || 'grey';
  const [color, setColor] = useState(savedColor);

  // Update localStorage whenever the color changes
  useEffect(() => {
    localStorage.setItem('bgColor', color);
  }, [color]);

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-lg'>
            <button
            onClick={color=>setColor("red")} 
            className='px-3 py-2 rounded-full outline-none text-white' style={{backgroundColor:"red"}}>Red</button>
            <button 
            onClick={color=>setColor("green")} 
            className='px-3 py-2 rounded-full outline-none text-white' style={{backgroundColor:"green"}}>Green</button>
            <button 
            onClick={color=>setColor("skyblue")} 
            className='px-3 py-2 rounded-full outline-none text-white' style={{backgroundColor:"skyblue"}}>Skyblue</button>
            <button
            onClick={color=>setColor("#00FFFF")} 
            className='px-3 py-2 rounded-full outline-none text-white' style={{backgroundColor:"#00FFFF"}}>Cyon</button>
            <button 
            onClick={color=>setColor("blue")} 
            className='px-3 py-2 rounded-full outline-none text-white' style={{backgroundColor:"blue"}}>Blue</button>
            <button 
            onClick={color=>setColor("violet")} 
            className='px-3 py-2 rounded-full outline-none text-white' style={{backgroundColor:"violet"}}>Violet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
