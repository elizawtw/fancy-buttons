import React from "react";
import {useState} from "react";

const TextRepeaterButton = () => {
  const [repetitions, setRepetitions] = useState(1);

  const onRepeatClick = () => setRepetitions(repetitions + 1);

  const textArray = [];
  for(let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text </span>)
  }

  return(
    
      <button className="TextRepeaterButton" onClick={onRepeatClick}>
        {textArray}
      </button>
    
  )
}

export default TextRepeaterButton;