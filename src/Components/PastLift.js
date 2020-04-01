import React from "react";
import "../Styles/PastLift.css";

function PastLift(props) {
  return (
    <div className="pastLift">
      <p><span className="boldText">Lift:</span> {props.lift}</p>
      <p><span className="boldText">Weight:</span> {props.weight}lbs</p>
      {props.reps}
    </div>
  )
}

export default PastLift;