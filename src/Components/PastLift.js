import React from "react";
import "../Styles/PastLift.css";

function PastLift(props) {
  return (
    <div className="pastLift">
      <p>Lift: {props.lift}</p>
      <p>Weight: {props.weight}lbs</p>
      {props.reps}
    </div>
  )
}

export default PastLift;