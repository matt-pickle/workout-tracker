import React, {useState, useEffect} from "react";
import "../Styles/WeightInput.css";
import Button from "./Button";

function WeightInput() {
  const [input, setInput] = useState("");

  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const year = today.getFullYear();
  const dateString = `${month}-${date}-${year}`;

  function handleChange(event) {
    setInput(event.target.value);
  }

  //Saves current weight to localStorage
  function addToHistory() {
    const weightHistory = JSON.parse(localStorage.getItem("weightHistory")) || {};
    const newWeightHistory = {...weightHistory, [dateString]: input};
    localStorage.setItem("weightHistory", JSON.stringify(newWeightHistory));
  }

  return (
    <div className="inputBox">
      <label for="weight">Current Weight</label>
      <div className="inputContainer" id="weightContainer">
        <input type="text"
               id="weight"
               value={input}
               onChange={handleChange}
        />
      </div>
      <Button text="SAVE"
              onClick={addToHistory}
      />
    </div>
  )
}

export default WeightInput;