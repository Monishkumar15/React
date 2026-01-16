import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const fruits = useSelector((state)=>state.fruitsInfo.fruits)
  console.log(fruits);
  
  return (
    <div>
        <h2>About</h2>
    </div>
  )
}

export default About