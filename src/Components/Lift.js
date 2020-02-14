import React, {useState, useEffect, useRef} from "react";
import InputBox from "./InputBox";
import "../Styles/Lift.css";

function Lift(props, ref) {
  const [sets, setSets] = useState([1]);
  const [liftObj, setLiftObj] = useState({id: props.id});
  const repsInputRef = useRef(null);

  function addSet() {
    const newSetNum = sets.length + 1;
    setSets(prev => [...prev, newSetNum]);
  }

  function addToLift(key, value) {
    setLiftObj({...liftObj, [key]: value});
  }

  //Focuses the new input box when a new set is added
  useEffect(() => {    
    repsInputRef.current.focus();
  }, [sets]);

  useEffect(() => {
    props.addToWorkout(liftObj);
  }, [liftObj]);

  const repInputBoxes = sets.map(setNum => {
    return <InputBox name={`Set ${setNum} Reps`}
                     key={setNum}
                     ref={repsInputRef}
                     addToLift={addToLift}
    />
  })

  return (
    <div className="liftBox">
      <InputBox name="Lift"
                addToLift={addToLift}
                ref={ref}
      />
      <InputBox name="Weight"
                addToLift={addToLift}
      />
      {repInputBoxes}
      <button className="addSetButton" onClick={addSet}>Add Set</button>
    </div>
  )
}

export default React.forwardRef(Lift);