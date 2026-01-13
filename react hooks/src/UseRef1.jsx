import { useEffect, useRef, useState } from "react";

function UseRef1(){
    const [value, setValue] = useState(0)
    const count = useRef(0);
    const inputElem = useRef("");
    useEffect(()=>{
        console.log(count);
        count.current=count.current+1;
    })

    return (
        <>
            <button onClick={()=>{setValue(prev=> prev-1)}}>-1</button>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
            <h1>Render Count: {count.current}</h1>
            <input type="text" ref={inputElem}/>
            <button onClick={()=>{
                console.log(inputElem.current)
                inputElem.current.style.background="yellow";
            }}>Click Here</button>
        </>
    );
}

export default UseRef1;