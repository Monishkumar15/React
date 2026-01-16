import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {username}= useParams();
  return (
    <div>
        <h2>User:{username}</h2>
    </div>
  )
}

export default User