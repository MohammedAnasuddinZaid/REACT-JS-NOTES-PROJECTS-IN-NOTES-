import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setcounter]  = useState(0)
  
  

  function addclick() {
    if(counter>=0 && counter <20){
      counter++
      setcounter(counter)
    }
  }

  const removeclick= () =>{
    if(counter>0){
      counter--
      setcounter(counter)
    }
  }
 
  return (
    <>
      <h1>HELLO</h1>
      <h2>COUNTER VALUE: {counter} </h2>
      <br></br>
      <button
      onClick={addclick}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeclick}>Decrease Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
