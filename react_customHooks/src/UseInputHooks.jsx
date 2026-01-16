import React from "react";
import useInput from "./custom-hooks/useInput";

const UseInputHooks = () => {
  const name = useInput("");
  return (
    <>
    <h1>UseInput Hooks Example</h1>
      <input value={name.value} onChange={name.onChange} />
      <button onClick={name.reset}>Clear</button>
      <hr />
    </>
  );
};

export default UseInputHooks;
