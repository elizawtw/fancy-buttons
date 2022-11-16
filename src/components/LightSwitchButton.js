import React from "react";
import {useState} from "react";

const LightSwitchButton = (props) => {
  const {light, setLight} = props;

  const onSwitchClick = () => setLight(light === 'off' ? 'on' : 'off');

  return (
    
      <button className="LightSwitchButton" onClick={onSwitchClick}>
         {light === 'on' && <span className="on"><i>💡</i> I'm on!</span>}
        {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
      </button>
    
  )
}

export default LightSwitchButton;