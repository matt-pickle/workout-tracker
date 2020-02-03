import React, {useState} from "react";

function Timer() {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  
  const startButton = <button onClick={startTimer}>Start</button>;
  const stopButton = <button onClick={stopTimer}>Stop</button>;

  function startTimer() {
    setTimerIsRunning(true);
  }

  function stopTimer() {
    setTimerIsRunning(false);
  }

  return (
    <div>
      <p>Timer</p>
      {timerIsRunning ? stopButton : startButton}
      <button>Reset</button>
    </div>
  )
}

export default Timer;