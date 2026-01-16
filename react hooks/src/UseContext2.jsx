import React, { createContext, useState } from "react";
import Container from "./components/Container";

export const ThemeContext = createContext();

const UseContext2 = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div>
        <button onClick={toggleTheme}>toogle Theme</button>
        <h2>UseContext example</h2>
        <Container />
        <hr />
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContext2;
