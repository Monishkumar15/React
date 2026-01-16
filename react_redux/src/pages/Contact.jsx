import React from 'react'
import { useState } from 'react'
import {setFruit} from '../slices/fruitSlice'
import { useDispatch } from 'react-redux';

const Contact = () => {
  const [fruit, setFruitInfo] = useState("");
  const dispatch = useDispatch();
  const addFruit = ()=>{
    dispatch(setFruit(fruit));
  }

  return (
    <div>
        <h2>Contact</h2>
        <input type="text"
        placeholder='Enter a fruit'
        onChange={(e) => setFruitInfo(e.target.value)} />
        <button onClick={addFruit}>Add Fruit</button>
    </div>
  )
}

export default Contact