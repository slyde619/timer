import React from "react";
import "./TimerControls.css"

function TimerControls(props) {
  return (
    <div className="controlDisplay">
      <button onClick={props.play}>Play</button>
      <button onClick={props.pause}>Pause</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

export { TimerControls };
