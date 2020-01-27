import React, {useState} from "react";
import InputBox from "./InputBox";

function Lift() {
  const [sets, setSets] = useState([1]);

  function addSet() {
    const newSetNum = sets.length + 1;
    setSets(prev => [...prev, newSetNum]);
  }

  const repInputBoxes = sets.map(setNum => {
    return <InputBox name={`Set ${setNum} Reps`}
                     key={setNum}
    />
  })

  return (
    <div>
      <InputBox name="Lift" />
      <InputBox name="Weight" />
      {repInputBoxes}
      <button onClick={addSet}>Add Set</button>
    </div>
  )
}

export default Lift;