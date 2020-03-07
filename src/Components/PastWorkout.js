import React from "react";
import PastLift from "./PastLift";

function PastWorkout(props) {
  const pastLifts = props.workoutArr.map(lift => {    
    let repsArr = [];
    const numOfSets = Object.keys(lift).length - 2;
    let i;
    for (i = 1; i < numOfSets; i++) {
      repsArr.push(<p>Set {i} Reps: {lift[`Set ${i} Reps`]}</p>);
    }
    return (
      <PastLift lift={lift["Lift"]}
                weight={lift["Weight"]}
                reps={repsArr}
      />
    )                     
  })
  
  return (
    <div>
      <p>{props.date}: </p>
      {pastLifts}
    </div>
  )
}

export default PastWorkout;