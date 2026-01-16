import React from "react";
import useToggle from "./custom-hooks/useToogle";

const Toogle = () => {
  const { value, toggle } = useToggle(false);
  const { value: showPassword, toggle: togglePassword } = useToggle(false);

  return (
    <>
      <h1>Toogle Example</h1>
      <p>Status: {value ? "ON" : "OFF"}</p>

      <button onClick={toggle}>Toggle</button>

      <input type={showPassword ? "text" : "password"} />
      <button onClick={togglePassword}>{showPassword ? "Hide" : "Show"}</button>
      <hr />
    </>
  );
};

export default Toogle;
