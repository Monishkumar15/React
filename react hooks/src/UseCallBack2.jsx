import React, { useCallback, useState } from 'react'
import Header from './components/Header';

const UseCallBack2 = () => {
  const [count, setCount]= useState(0);
  
  const newFn = useCallback(()=>{},[]) //useCallback() stored in cache funtion
  
    return (
    <>
        <Header newFn={newFn}/> {/** This UseCallBack component mounted with Header*/} 
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>click here</button>
    </>
  )
}

export default UseCallBack2