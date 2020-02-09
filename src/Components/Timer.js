import React, {useState} from "react";
import TimerInputs from "./TimerInputs";
import TimerDisplay from "./TimerDisplay";

function Timer() {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
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
      {timerIsRunning ?
        <TimerDisplay minutes={minutes}
                      seconds={seconds}
        /> :
        <TimerInputs minutes={minutes}
                     setMinutes={setMinutes}
                     seconds={seconds}
                     setSeconds={setSeconds}
        />}
      {timerIsRunning ? stopButton : startButton}
      <button>Reset</button>
    </div>
  )
}

export default Timer;