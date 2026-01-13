import {useState} from 'react';

function UseState2() {
    const [Bike, setBike] = useState({
        brand: "TVS",
        model: "Ntorq 125",
         year: 2023,
        color: "grey"
    });
    const changeColor = () => {
        setBike(previousState => {
            return {...previousState, color: "black"}
        });
    }

    return (
        <>
        <h1>My {Bike.brand}</h1> 
        <h2>It is {Bike.color} {Bike.model} from {Bike.year}</h2>
        <button onClick={changeColor}>Change Color</button>
        
        </>
    )
}

export default UseState2;