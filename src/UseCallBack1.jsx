import React, { useCallback, useState } from 'react'
import List from './components/List';

const UseCallBack1 = () => {
    const[number, setNumber]= useState(0);
    const[dark,setDark]=useState(false);

    const getItems = useCallback((incrementar)=>{
      return [number+incrementar+1,
         number+incrementar+2, 
         number+incrementar+3];
    },[number])
    
    const theme = {
        backgroundColor: dark? "black" : "white",
        color: dark? "white" : "black",
    };

  return (
    <div style={theme}>
        <input type="number"
        value={number}
        onChange={(e)=>setNumber(parseInt(e.target.value))} />
        <button onClick={()=>setDark((curr)=>!curr)}>Toogle theme</button>
        <List getItems={getItems} />
        <hr />
    </div>
  )
}

export default UseCallBack1