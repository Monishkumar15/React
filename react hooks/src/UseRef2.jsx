import React, { useEffect, useRef, useState } from 'react'

const UseRef2 = () => {
    const [input, setInput] = useState("")
    const inputRef = useRef();

    console.log("Getting rendered");

    useEffect(()=>{
        inputRef.current=input;
    },[input])
    

    function display(){
        console.log(inputRef.current);
        // inputRef.current.focus();
        
    }
  return (
    <>
        <h1>Input</h1>
        <input 
        ref={inputRef}
        type="text" 
        value={input} 
        onChange={(event)=>setInput(event.target.value)}/>
        <p>My name is {input}</p>
        <p>My name is {inputRef.current}</p>
        <button onClick={display}>Show Input</button>
    </>
  )
}

export default UseRef2