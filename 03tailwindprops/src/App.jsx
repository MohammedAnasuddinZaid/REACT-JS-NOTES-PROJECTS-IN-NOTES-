import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './COMPONENTS/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "anas",
    age: 17
    
  }
  let newarr = [1,2,3,4]

  return (
    <>
      <h1 className= 'bg-green-400 text-yellow-300 p-20 mt-50 rounded-4xl'> HELLO </h1>

      <Card anas="broo" btntext="click me"/>
      <Card anas="bhai" />

    </>
  )
}

export default App

