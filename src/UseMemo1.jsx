import { useMemo, useState } from "react";

function UseMemo1() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  // const result = useMemo(()=>{return cubeNum(number)},[number]);
  const result = cubeNum(number);

  function cubeNum(num){
    console.log(`calculation done by ${num}`)
    return Math.pow(num,3)
  }

  return (
    <>
      <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <h1>Cube of the number ;{result}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>counter++</button>
      <h1>Counter: {counter}</h1>
    </>
  );
}

export default UseMemo1;