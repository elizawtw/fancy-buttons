import React from "react";
import {useState} from 'react';

const CounterButton = (props) => {
  const [clickAmount, setClickAmount] = useState(0);
const onCounterClick = () => setClickAmount(clickAmount + 1);


  return(
    
      <button className="CounterButton" onClick={onCounterClick}>
        You clicked me {clickAmount} times
      </button>
  
  )
}
export default CounterButton;