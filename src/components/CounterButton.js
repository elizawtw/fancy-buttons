import React from "react";
import {useState} from 'react';

const CounterButton = () => {
  const [clickAmount, setClickAmount] = useState();
  return(
    
      <button className="CounterButton">
        You clicked me {clickAmount} times
      </button>
  
  )
}
export default CounterButton;