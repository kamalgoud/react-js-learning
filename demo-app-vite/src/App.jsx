import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)

  // let counter = 15

  // reconcilation
  const addValue = ()=>{
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  }

  return (
    <>
      <h1>Hello App {counter}</h1>
      <h2>Header</h2>
      <button onClick={addValue}>Add value</button>
    </>
  )
}

export default App
