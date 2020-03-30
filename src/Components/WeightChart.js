import React from "react";
import {Line} from "react-chartjs-2";
import "../Styles/WeightChart.css";

function WeightChart(props) {
  const datesArr = Object.keys(props.weightHistory) || [];
  const weightsArr = Object.values(props.weightHistory) || [];
  
  const chartData = {
    labels: datesArr,
    datasets: [{
      label: "Weight",
      data: weightsArr,
      borderColor: "rgb(0, 0, 0)",
      borderWidth: 3
    }]
  };
  const chartOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          lineWidth: 1,
          color: "rgb(0, 0, 0)"
        }
      }],
      yAxes: [{
        gridLines: {
          lineWidth: 1,
          color: "rgb(0, 0, 0)"
        }
      }]
    }
  }

  return (
    <div className="weightChart">
      <Line data={chartData}
            options={chartOptions}
      />
    </div>
  )
}

export default WeightChart;