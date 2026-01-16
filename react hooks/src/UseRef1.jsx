import { useEffect, useRef, useState } from "react";

function UseRef1() {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  const inputElem = useRef("");
  const [element, setElement] = useState("");
 
  useEffect(() => {
    console.log(count);
    count.current = count.current + 1;
  });
  
  const handleClick = () => {
    setElement(inputElem.current.value);
    console.log(inputElem.current);
    inputElem.current.style.background = "yellow";
  };

  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>Render Count: {count.current}</h1>
      <input type="text" ref={inputElem} />
      <h2>{element}</h2>
      <button onClick={handleClick}>Click Here</button>
      <hr />
    </>
  );
}

export default UseRef1;
