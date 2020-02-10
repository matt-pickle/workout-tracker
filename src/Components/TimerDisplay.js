import React, {useState, useEffect} from "react";

function TimerDisplay(props) {
  const [minutesRemaining, setMinutesRemaining] = useState(props.minutes);
  const [secondsRemaining, setSecondsRemaining] = useState(props.seconds);
  
  const startingTime = Date.now();
  const timerMilliseconds = props.minutes * 60000 + props.seconds * 1000;
  const endingTime = startingTime + timerMilliseconds;

  //Adds zero in front of single-digit numbers
  function addZero(num) {
    if (num < 10 && num >= 0) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  //Checks current time against timer's end time every second
  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      setMinutesRemaining(addZero(Math.round((endingTime - Date.now()) / 60000)));
      setSecondsRemaining(addZero(Math.round(((endingTime - Date.now()) % 60000) / 1000)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //Alerts when time is up and switches back to the input display
  function timesUp() {
    if (minutesRemaining === "00" && secondsRemaining === "00") {
      alert("Times Up!");
      props.setTimerIsRunning(false);
    }
  }

    return (
    <div>
      <p>{`${minutesRemaining} : ${secondsRemaining}`}</p>
      {timesUp()}
    </div>
  )
}

export default TimerDisplay;