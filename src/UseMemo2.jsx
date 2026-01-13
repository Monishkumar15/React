import React, { useEffect, useMemo, useState } from "react";

const UseMemo2 = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = useMemo(()=>{
    return {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  },[dark])

  const doubleNumber = useMemo(()=>{
    console.log("use Memo");
    
    return slowFunction(number);
  },[number])


  //! This old way to use useState,useEffect and declare new state variable so recoment to use (useMemo)
  // const [doubleNumber, setDoubleNumber] = useState(0);
  // useEffect(()=>{
  //   setDoubleNumber(slowFunction(number))
  // },[number])

  useEffect(()=>{
    console.log("Theme changed");
    
  },[themeStyles])

  return (
    <>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
      <button onClick={() => setDark((curr) => !curr)}>Toogle Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
      <hr />
    </>
  );
};

export default UseMemo2;

function slowFunction(num){
  console.log("running slow");
  
  for(let i=0; i<1000000000; i++){}
  return num*2;
}