import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [numbersAllowd, setNumbersAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)

  const passRef = useRef(null)

  const generatePassword = useCallback(() => {
    let allStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowd) allStr += "0123456789"
    if (charsAllowed) allStr += "@#$%^&*()_+{}|<>?:'~"
    let pass = ""
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * (allStr.length) + 1)
      pass += allStr.charAt(random)
    }
    setPassword(pass)
  }, [length, numbersAllowd, charsAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numbersAllowd, charsAllowed])

  const copyText = ()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }

  return (
    <>
      <div>
        <h1>Password generator</h1>
        <input type="text" defaultValue={password} readOnly ref={passRef} /> {" "}
        <button onClick={copyText}>copy</button> <br /><br /><br />
      </div>
      <div>
        <input type="range" onChange={(e) => setLength(e.target.value)} value={length} min={6} max={100} />
        <label htmlFor='length'>Length : {length}</label> <br /><br /><br />
      </div>
      <div>
        <input type="checkbox" defaultChecked={numbersAllowd} onChange={() => { setNumbersAllowed((prev) => !prev) }} name="" id="" />
        <label htmlFor="numbers">Numbers</label>
      </div>
      <div>
        <input type="checkbox" defaultChecked={charsAllowed} onChange={() => { setCharsAllowed((prev) => !prev) }} name="" id="" />
        <label htmlFor="charachters">Special Charachters</label>
      </div>
    </>
  )
}

export default App
