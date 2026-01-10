import { useState } from "react";

function UseState1() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");  
    const [prevCount, setPrevCount] = useState(0);
    const increasedCount = () => {
        setPrevCount(count =>count+1);
        setPrevCount(count =>count+1);
        setPrevCount(count =>count+1);
        setPrevCount(count =>count+1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>         
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h2>Count: {prevCount}</h2>
            <button onClick={increasedCount}>Increased By 4</button>
            <h2>My favourite color is {color}!</h2>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("green")}>Green</button>
        </div>
    );
}

export default UseState1;