import React from "react";
import "../Styles/PastWorkout.css";
import PastLift from "./PastLift";

function PastWorkout(props) {
  const pastLifts = props.workoutArr.map(lift => {    
    let repsArr = [];
    const numOfSets = Object.keys(lift).length - 2;
    let i;
    for (i = 1; i < numOfSets; i++) {
      repsArr.push(<p><span className="boldText">Set {i}:</span> {lift[`Set ${i}`]} reps</p>);
    }
    return (
      <PastLift lift={lift["Lift"]}
                weight={lift["Weight"]}
                reps={repsArr}
                key={lift["id"]}
      />
    )                     
  })
  
  return (
    <div className="pastWorkout">
      <p className="dateText">{props.date}</p>
      <div className="pastLiftsContainer">
        {pastLifts}
      </div>
    </div>
  )
}

export default PastWorkout;