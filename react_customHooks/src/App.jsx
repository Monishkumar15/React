import React from 'react'
import UseCounter from './custom-hooks/useCounter'
import './App.css'
import Counter from './Counter'
import Toogle from './Toogle'
import UseInputHooks from './UseInputHooks'
import Fetch from './Fetch'

const App = () => {
 return(
    <>
      <Counter />
      <Toogle />
      <UseInputHooks />
      <Fetch />
    </>
 )
}

export default App