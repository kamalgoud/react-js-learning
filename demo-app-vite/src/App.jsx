import { useState } from 'react'
import './App.css'

function App() {

  let counter = 15

  const addValue = ()=>{
    counter = counter+1;
    console.log(counter);
    
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
