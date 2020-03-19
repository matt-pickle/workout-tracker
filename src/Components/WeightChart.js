import React from "react";
import {Line} from "react-chartjs-2";

function WeightChart(props) {
  const datesArr = Object.keys(props.weightHistory);
  const weightsArr = Object.values(props.weightHistory);
    
  return (
    <Line data={{
      labels: datesArr,
      datasets: [{
        data: weightsArr
      }]
    }}
    />
  )
}

export default WeightChart;