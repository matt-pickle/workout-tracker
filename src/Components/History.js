import React from "react";
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
    <div>
      <p>History Page</p>
      <p>{JSON.stringify(workoutHistory)}</p>
      <p>{pastWorkouts}</p>
    </div>
  )
}


export default History;