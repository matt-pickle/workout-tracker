import React, {useState, useEffect} from "react";
import InputBox from "./InputBox";

function Lift(props) {
  const [sets, setSets] = useState([1]);
  const [liftObj, setLiftObj] = useState({id: props.id});

  function addSet() {
    const newSetNum = sets.length + 1;
    setSets(prev => [...prev, newSetNum]);
  }

  function addToLift(key, value) {
    setLiftObj({...liftObj, [key]: value});
  }

  useEffect(() => {
    props.addToWorkout(liftObj);
  }, [liftObj])

  const repInputBoxes = sets.map(setNum => {
    return <InputBox name={`Set ${setNum} Reps`}
                     key={setNum}
                     addToLift={addToLift}
    />
  })

  return (
    <div>
      <InputBox name="Lift"
                addToLift={addToLift}
      />
      <InputBox name="Weight"
                addToLift={addToLift}
      />
      {repInputBoxes}
      <button onClick={addSet}>Add Set</button>
    </div>
  )
}

export default Lift;