import React from "react";
import "../Styles/History.css";
import PastWorkout from "./PastWorkout";

function History() {
  const workoutHistory = JSON.parse(localStorage.getItem("workoutHistory"));

  const pastWorkouts = workoutHistory.map(workout => {
    const workoutDate = Object.keys(workout)
    console.log(workout.workoutDate)
    return (
      <PastWorkout date={workoutDate}
                   workoutArr={workout[workoutDate]}
      />
    )
  })
  
  return (
    <div className="history">
      {pastWorkouts}
    </div>
  )
}


export default History;