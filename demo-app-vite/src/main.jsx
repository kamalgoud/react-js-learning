import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

function MyApp(){
  return (
    <div>
      <h1>Hello from myApp</h1>
    </div>
  )
}

let newArr = [1,2,3,4]

const profilePic="https://media.idownloadblog.com/wp-content/uploads/2023/04/Google-profile-picture.png"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card name="Kamal" myArr={newArr} newProfilePic={profilePic}/>
    <Card/>
    {/* <App /> */}
    {/* <MyApp/> */}
  </StrictMode>,
)


