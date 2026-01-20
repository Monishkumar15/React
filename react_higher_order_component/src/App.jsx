import React from 'react'
import withClickTracking from "./WithClickTracking"
import Button from './Button'
import Hoc from './components/Hoc';
import Person from './components/Person';

const App = () => {
  const ButtonWithTracking = withClickTracking(Button); //HOC
  const WithGreetingMessage = Hoc(Person);
  return (
    <div>
      <ButtonWithTracking 
       label="Pay Now"
       trackingInfo={{amount:"2000", user: "Jack"}}
       />
       <Button label="Pay Now"
       trackingInfo={{amount:"2000", user: "Jack"}}
        />
        <WithGreetingMessage message="goog Morning" />
    </div>
  )
}

export default App