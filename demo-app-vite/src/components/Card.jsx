import React from 'react'

export default function Card({name="NA",myArr,newProfilePic}) {//we can directly put props instead of destructuring it
  return (
    <div>
      <img src={newProfilePic} height="100" width="200" alt='profile pic'/>
      <p>Name : {name} : {myArr}</p>
    </div>
  )
}
