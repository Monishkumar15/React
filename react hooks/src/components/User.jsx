import React, { useContext } from 'react'
import { ThemeContext } from '../UseContext2'

const User = () => {

    const {theme} = useContext(ThemeContext);

    const textStyle ={
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    }
  return (
    <div>
        <h2 style={textStyle}>User</h2>
    </div>
  )
}

export default User