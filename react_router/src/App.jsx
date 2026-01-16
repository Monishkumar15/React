import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import User from './pages/User';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Users from './Users';
import Error from './Error';

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/user/:username' element={<User />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
