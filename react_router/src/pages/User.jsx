import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {
  const {username}= useParams();
  const navigate = useNavigate();

  return (
    <div>
        <h2>User:{username}</h2>
        
      <button onClick={() => navigate("/users")}>
        Go to Users
      </button>
    </div>
  )
}

export default User