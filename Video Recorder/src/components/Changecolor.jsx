import React from 'react'
import { useState } from 'react'

export default function Changecolor(props) {
  const [color, setColor] = useState('white')

  function colorChange(newColor) {
    setColor(newColor)
    console.log(newColor);

  }
  return (
    <div style={{ backgroundColor: color }}>
      <button color="brown" onClick={()=>colorChange(props.color)}>{props.color}</button>
    </div>
  )
}
