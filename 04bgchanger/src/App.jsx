import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color,setcolourbg] = useState("olive")

  return (
    <>


      <div className="w-screen h-screen duration-300  " style={{background:color}}>
        
        <nav className='w-full bg-slate-800 p-4 text-white '>
          <p className='flex justify-center '>PICK THE COLOUR YOU WANT TO CHANGE THE BAGROUND COLOUR</p>
        </nav>
          <div className='fixed bottom-3 w-full p-1  bg-white rounded-4xl  '>
            <ul className='flex justify-between items-center w-full cursor-pointer  '>
              <li className='bg-green-400 rounded-2xl text-2xl cursor-pointer'onClick={()=> setcolourbg("green")}>Green</li>
              <li className='bg-blue-400 rounded-2xl text-2xl cursor-pointer'onClick={()=> setcolourbg("blue")}>blue</li>              
              <li className='bg-red-400 rounded-2xl text-2xl cursor-pointer'onClick={()=> setcolourbg("red")}>red</li>
              <li className='bg-purple-400 rounded-2xl text-2xl cursor-pointer'onClick={()=> setcolourbg("purple")}>purple</li>
              <li className='bg-yellow-200 rounded-2xl text-2xl cursor-pointer 'onClick={()=> setcolourbg("white")} >white</li>
              <li className='bg-black rounded-2xl text-2xl text-white cursor-pointer'onClick={()=> setcolourbg("black")}>black</li>
              <li className='bg-orange-400 rounded-2xl text-2xl cursor-pointer'onClick={()=> setcolourbg("orange")}>orange</li>
            </ul>
          </div>
        
      </div>

      
    </>
  )
}

export default App
