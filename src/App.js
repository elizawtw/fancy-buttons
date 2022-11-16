import './App.css';
import React from "react";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextReapeaterButton";

const App = () => {
  return(
    <div className={"App"}>
      <h1>Fancy Button!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  )
}

export default App;