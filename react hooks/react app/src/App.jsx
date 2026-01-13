import './App.css'
import Course from './Course.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import html from './assets/html.jpg'
import css from './assets/css.jpg'
import js from './assets/javascript.jpg'
import Parent from './Parent.jsx'
import Goal from './Goal.jsx'
import MyCars from './MyCars.jsx'
import RoutesExample from './RoutesExample.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Course name="HTML" image={html} title="HTML" description="HTML is the standard markup language for creating Web pages." />
      <Course name="CSS" image={css} title="CSS" description="CSS is a style sheet language used for describing the presentation of a document." />
      <Course name="JavaScript" image={js} title="JavaScript" description="JavaScript is a programming language that enables interactive web pages." />  
      <Course />
      <Course />
      
      {/* React parent-child props component example */}
      <Parent />
      <Goal isGoal={true} />  <Goal />
      <MyCars />
      <RoutesExample />
      <Footer />
    </>
  )
}

export default App
