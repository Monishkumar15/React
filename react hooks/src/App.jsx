import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState1 from "./UseState1";
import UseState2 from "./UseState2";
import UseEffect1 from "./UseEffect1";
import UseRef1 from "./UseRef1";
import UseMemo1 from "./UseMemo1";
import UseEffect2 from "./UseEffect2";
import UseRef2 from "./UseRef2";
import UseMemo2 from "./UseMemo2";
import UseCallBack1 from "./UseCallBack1";
import UseCallBack2 from "./UseCallBack2";
import UseContext1 from "./UseContext1";
import ContextProvider from "./context/AppContext";
import UseContext2 from "./UseContext2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseState1 />
      <UseState2 />
      <UseEffect1 />
      <UseRef1 />
      <UseMemo1 />
      <UseEffect2 />
      <UseRef2 />
      <UseMemo2 />
      <UseCallBack1 />
      <UseCallBack2 />
      <ContextProvider>
          <UseContext1 />
      </ContextProvider>
      <UseContext2 />
    </>
  );
}

export default App;
