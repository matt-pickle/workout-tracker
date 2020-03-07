import React from "react";

function PastLift(props) {
  return (
    <div>
      <p>Lift: {props.lift}</p>
      <p>Weight: {props.weight}</p>
      {props.reps}
    </div>
  )
}

export default PastLift;