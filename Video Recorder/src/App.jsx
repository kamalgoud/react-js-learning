import { useEffect, useRef, useState } from 'react'
import './App.css'
import Changecolor from './components/Changecolor'
import { use } from 'react'
import CountDown from './components/CountDown'

function App() {
  const videoRef = useRef(null)
  const [time,setTime] = useState(0)
  const [dialogComponent, setDialogComponent] = useState(<></>)
  const [image, setImage] = useState(null)

  function getUserMedia() {
    var stream = navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }).then((stream) => {
      videoRef.current.srcObject = stream
      console.log(stream);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleCloseDialog = () => {
    setDialogComponent(<></>)
  }

  function captureImage() {
    if (!videoRef.current || !videoRef.current.srcObject) {
      console.log('no video')
      return;
    }

    const canvas = document.createElement('canvas')
    const video = videoRef.current

    setTime(5)

    setTimeout(() => {
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
      const data = canvas.toDataURL('image/png')
      setImage(data) // store
      setTime(0)

    }, 5000)
  }
  return (
    <>
      <div>
        <h1>Video Call APP</h1>
      </div>
      <>
      <div>
      {time > 0 && <CountDown duration={time} />}
      </div>
        <div>
          <video autoPlay={true} playsInline={true} muted={true} width="80%" height="70%" ref={videoRef} ></video> <br></br>
          <button color="brown" onClick={() => getUserMedia()}>Take media stream</button>
          <button color="brown" onClick={() => captureImage()}>capture Image</button>
        </div>
        <div>
          <img src={image} width="30%" height="30%" ></img>
        </div>
      </>
    </>
  )
}

export default App
