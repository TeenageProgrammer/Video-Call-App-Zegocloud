import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [roomID, setRoomID] = useState("")
  const navigate = useNavigate();
  
  const handleJoinVideoCall = ()=>{
    navigate(`/videocall/${roomID}`)
  }

  return (
    <>
      <div className="container">
        <div className="home">
          <h1>Video Call APP</h1>
          <p>using <b>ZEGOCLOUD</b> UI Kit</p>
          <div>
            <input type="text" placeholder='Enter Your Room ID' value={roomID} onChange={(e)=> setRoomID(e.target.value)}/>
            <button onClick={handleJoinVideoCall}>JOIN</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home