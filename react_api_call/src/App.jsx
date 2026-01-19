import React from 'react';
// import axios from 'axios';
import { useEffect } from 'react';
import axios from './axios';
import ApiCall from './ApiCall';

const App = () => {

  async function apiCall() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    const data = await response.json();
    console.log(response);// Response
    console.log(data); //JSON data
  }

  async function apiCallAxios(){
    const response = await axios.get(
      "/products"
    );
    console.log(response);
    console.log(response.data);
    
  }
  // useEffect(()=>{apiCall()},[]) 
  return (
    <div>
      <h2>App</h2>
      <button onClick={apiCallAxios}>API call</button>
      <ApiCall />
    </div>
  )
}

export default App