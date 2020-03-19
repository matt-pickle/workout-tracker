import React, {useState} from "react";
import WeightInput from "./WeightInput";
import WeightChart from "./WeightChart";

function Weight() {
  const [weightHistory, setWeightHistory] = useState(
    JSON.parse(localStorage.getItem("weightHistory")) || {}
  );

  return (
    <div>
      <WeightInput setWeightHistory={setWeightHistory} />
      <WeightChart weightHistory={weightHistory} />
    </div>
  )
}

export default Weight;