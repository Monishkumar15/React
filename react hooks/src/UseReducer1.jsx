import React, { useReducer, useState } from 'react'

const ACTIONS ={
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

function reducerFn(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count: state.count+1};
        case ACTIONS.DECREMENT:
            return {count: state.count-1};
        default:
            return state;        
    }

}

const UseReducer1 = () => {
    const [count, setCount]=useState(0);
    const [state, dispatch] = useReducer(reducerFn,{count:1})

    const incrementar = ()=>{
        // setCount(count=>count+1);
        // dispatch({type: "increment"});
        dispatch({type: ACTIONS.INCREMENT})
    }
    const decrementar = ()=>{
        // setCount(count=>count-1);
        dispatch({type: ACTIONS.DECREMENT})
    }
    console.log(state);
    
  return (
    <>
       <div style={{
        display:'flex',
        alignItems: "center",
        justifyContent: "center"
    }}>
        <button onClick={decrementar}>-</button>
        <h2>{state.count}</h2>
        <button onClick={incrementar}>+</button>
        
    </div>
    <hr /> 
    </>
  )
}

export default UseReducer1