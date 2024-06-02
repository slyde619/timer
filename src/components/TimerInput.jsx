import React, { useState } from "react";

function TimerInput(props) {
  const [tempCount, setTempCount] = useState(0);

  const handleUpdate = (e) => {
    if (e.key == "Enter") {
      props.change(parseInt(e.target.value));
    } else {
      setTempCount(e.target.value);
    }
    console.log(e.key);
  };

  return (
    <div>
      <input type="number" onKeyUp={handleUpdate} />
      <button
        onClick={() => {
          props.change(parseInt(tempCount));
        }}
      >
        Enter
      </button>
    </div>
  );
}

export { TimerInput };
