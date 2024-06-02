import React from "react";

function TimerDisplay(props) {
  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  );
}

export { TimerDisplay };
