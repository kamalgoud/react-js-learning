import { useState } from 'react'
import './App.css'
import Changecolor from './components/Changecolor'

function App() {
  const [color, setColor] = useState('white')

  function colorChange(newColor) {
    setColor(newColor)
    // document.body.style.backgroundColor = newColor;
    console.log(newColor);

  }

  return (
    <div style={{backgroundColor:color}}>
      <h1>BG-Changer-App</h1>
      <button color="brown" onClick={()=>colorChange("red")}>RED</button>
      <button color="brown" onClick={()=>colorChange("green")}>GREEN</button>
    </div>
  )
}

export default App
