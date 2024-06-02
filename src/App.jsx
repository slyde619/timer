import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TimerDisplay } from "./components/TimerDisplay";
import { TimerControls } from "./components/TimerControls";
import { TimerInput } from "./components/TimerInput";

function App() {
  const [count, setCount] = useState(0);
  const [countState, setCountState] = useState("pause");
  const [intervalId, setIntervalId] = useState(null);
  /*Objective: Create a countdown timer that allows users to set a time, start the countdown, and see the remaining time update every second.

Requirements:

•⁠  ⁠Set Timer: Users should be able to input the number of seconds for the countdown.
•⁠  ⁠Start Timer: Users should be able to start the countdown.
•⁠  ⁠Pause Timer: Users should be able to pause the countdown.
•⁠  ⁠Reset Timer: Users should be able to reset the countdown to the initial time set.

Instructions:

Create a new React application.
Implement the following components:
•⁠  ⁠App: The main component that manages the state and renders other components.
•⁠  ⁠TimerInput: A component for setting the countdown time.
•⁠  ⁠TimerDisplay: A component that displays the remaining time.
•⁠  ⁠TimerControls: A component for starting, pausing, and resetting the timer.*/

  useEffect(() => {
    console.log(countState);

    if (countState == "play") {
      let interval = setInterval(function () {
        setCount((count) => count - 1);
        if (count === 0) {
          return () => clearInterval(intervalId);
        }
      }, 1000);
      setIntervalId(interval);
    } else {
      if (intervalId) {
        return () => clearInterval(intervalId);
      }
    }
  }, [countState, intervalId]);

  const pause = () => {
    setCount(count);
    setCountState("pause");
  };

  const play = () => {
    setCountState("play");
  };

  const reset = () => {
    setCount(0);
    setCountState("reset");
  };

  return (
    <>
      <TimerInput count={count} change={setCount} />
      <TimerDisplay count={count} />
      <TimerControls play={play} pause={pause} reset={reset} />
    </>
  );
}

export default App;
