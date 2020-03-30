import React from "react";
import "../Styles/History.css";
import PastWorkout from "./PastWorkout";

function History() {
  const workoutHistory = JSON.parse(localStorage.getItem("workoutHistory"));

  const pastWorkouts = workoutHistory ? 
    workoutHistory.map(workout => {
      const workoutDate = Object.keys(workout)
      return (
        <PastWorkout date={workoutDate}
                    workoutArr={workout[workoutDate]}
        />
      )
    })
  : <h1>No workout history yet!</h1>;

  
  return (
    <div className="history">
      {pastWorkouts}
    </div>
  )
}


export default History;