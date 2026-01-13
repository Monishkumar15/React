import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    const[num1,setNum1]=useState(100);
    const [num2, setNum2] = useState(100)
    useEffect(()=>{
        setNum1(200)
        console.log("useEffect");

        //cleareup or Memory clearup
        return()=>{
            setNum1(100); // setNum1(null)
            console.log("Memory cleaned");
            
        }
        
    },[num1])
    
    console.log(`num1`, num1);
  
    return (
    <>
    <h2>{num1}</h2>
    <button onClick={()=>setNum1((num)=>num+1)}>add</button>
    <h2>{num2}</h2>
    <button onClick={()=>setNum2((num)=>num+1)}>add</button>
    </>
  )
}

export default UseEffect2